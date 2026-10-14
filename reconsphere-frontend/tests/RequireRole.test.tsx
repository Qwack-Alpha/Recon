import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AuthContext } from "../auth/AuthContext";
import RequireRole from "../routes/RequireRole";

const mockUser = {
    id: "1",
    first_name: "Test",
    last_name: "User",
    email: "test@example.com",
    role: "AUDITOR",
    organization_id: "org-1",
};

describe("RequireRole", () => {
    it("renders children when role is allowed", () => {
        render(
            <AuthContext.Provider
                value={{
                    user: mockUser,
                    loading: false,
                    isAuthenticated: true,
                    login: async () => {},
                    logout: () => {},
                }}
            >
                <RequireRole roles={["ADMIN", "AUDITOR"]}>
                    <div>Allowed content</div>
                </RequireRole>
            </AuthContext.Provider>,
        );

        expect(screen.getByText("Allowed content")).toBeInTheDocument();
    });

    it("shows access denied when role is not allowed", () => {
        render(
            <AuthContext.Provider
                value={{
                    user: { ...mockUser, role: "VIEWER" },
                    loading: false,
                    isAuthenticated: true,
                    login: async () => {},
                    logout: () => {},
                }}
            >
                <RequireRole roles={["ADMIN", "AUDITOR"]}>
                    <div>Allowed content</div>
                </RequireRole>
            </AuthContext.Provider>,
        );

        expect(screen.getByText("Access denied")).toBeInTheDocument();
    });
});
