import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { AuthProvider, AuthContext } from "../auth/AuthContext";
import { useAuth } from "../auth/useAuth";

vi.mock("../services/authService", () => ({
    login: vi.fn(),
    me: vi.fn(),
}));

vi.mock("../utils/tokenStorage", () => ({
    TokenStorage: {
        access: vi.fn(),
        refresh: vi.fn(),
        set: vi.fn(),
        clear: vi.fn(),
    },
}));

const { login, me } = await import("../services/authService");
const { TokenStorage } = await import("../utils/tokenStorage");

function AuthConsumer() {
    const { user, loading, isAuthenticated, login: loginAction, logout } = useAuth();

    return (
        <div>
            <div>loading:{loading ? "true" : "false"}</div>
            <div>authenticated:{isAuthenticated ? "true" : "false"}</div>
            <div>user:{user ? user.email : "none"}</div>
            <button onClick={() => loginAction({ email: "test@example.com", password: "pass" })}>login</button>
            <button onClick={() => logout()}>logout</button>
        </div>
    );
}

describe("AuthContext", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it("restores without token and stays unauthenticated", async () => {
        (TokenStorage.access as vi.Mock).mockReturnValue(null);

        render(
            <AuthProvider>
                <AuthConsumer />
            </AuthProvider>,
        );

        await waitFor(() => expect(screen.getByText("loading:false")).toBeInTheDocument());
        expect(screen.getByText("authenticated:false")).toBeInTheDocument();
        expect(screen.getByText("user:none")).toBeInTheDocument();
    });

    it("restores with token and sets the user when me succeeds", async () => {
        const fakeUser = {
            id: "1",
            first_name: "Test",
            last_name: "User",
            email: "restore@example.com",
            role: "ADMIN",
            organization_id: "org-1",
        };

        (TokenStorage.access as vi.Mock).mockReturnValue("token-a");
        (me as vi.Mock).mockResolvedValue(fakeUser);

        render(
            <AuthProvider>
                <AuthConsumer />
            </AuthProvider>,
        );

        await waitFor(() => expect(screen.getByText("authenticated:true")).toBeInTheDocument());
        expect(screen.getByText("user:restore@example.com")).toBeInTheDocument();
        expect(TokenStorage.clear).not.toHaveBeenCalled();
    });

    it("clears tokens when restore fails", async () => {
        (TokenStorage.access as vi.Mock).mockReturnValue("token-a");
        (me as vi.Mock).mockRejectedValue(new Error("restore failed"));

        render(
            <AuthProvider>
                <AuthConsumer />
            </AuthProvider>,
        );

        await waitFor(() => expect(screen.getByText("loading:false")).toBeInTheDocument());
        expect(screen.getByText("authenticated:false")).toBeInTheDocument();
        expect(TokenStorage.clear).toHaveBeenCalled();
    });

    it("logs in and stores tokens when login is successful", async () => {
        const fakeUser = {
            id: "1",
            first_name: "Test",
            last_name: "User",
            email: "test@example.com",
            role: "ADMIN",
            organization_id: "org-1",
        };

        (TokenStorage.access as vi.Mock).mockReturnValue(null);
        (login as vi.Mock).mockResolvedValue({ access_token: "token-a", refresh_token: "token-b" });
        (me as vi.Mock).mockResolvedValue(fakeUser);

        render(
            <AuthProvider>
                <AuthConsumer />
            </AuthProvider>,
        );

        await waitFor(() => expect(screen.getByText("loading:false")).toBeInTheDocument());
        await userEvent.click(screen.getByText("login"));

        await waitFor(() => expect(screen.getByText("authenticated:true")).toBeInTheDocument());
        expect(screen.getByText("user:test@example.com")).toBeInTheDocument();
        expect(TokenStorage.set).toHaveBeenCalledWith("token-a", "token-b");
    });

    it("logs out and clears storage", async () => {
        (TokenStorage.access as vi.Mock).mockReturnValue(null);

        render(
            <AuthProvider>
                <AuthConsumer />
            </AuthProvider>,
        );

        await waitFor(() => expect(screen.getByText("loading:false")).toBeInTheDocument());
        await userEvent.click(screen.getByText("logout"));

        expect(screen.getByText("authenticated:false")).toBeInTheDocument();
        expect(TokenStorage.clear).toHaveBeenCalled();
    });
});
