import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { AuthContext } from "../auth/AuthContext";
import ProtectedRoute from "../routes/ProtectedRoute";

describe("ProtectedRoute", () => {
    function renderWithAuth(authValue: any) {
        render(
            <AuthContext.Provider value={authValue}>
                <MemoryRouter initialEntries={["/"]}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <div>Protected content</div>
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/login" element={<div>Login page</div>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>,
        );
    }

    it("shows a loading state while auth is resolving", () => {
        renderWithAuth({
            loading: true,
            isAuthenticated: false,
            user: null,
            login: async () => {},
            logout: () => {},
        });

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("redirects unauthenticated users to login", () => {
        renderWithAuth({
            loading: false,
            isAuthenticated: false,
            user: null,
            login: async () => {},
            logout: () => {},
        });

        expect(screen.getByText("Login page")).toBeInTheDocument();
    });

    it("renders children for authenticated users", () => {
        renderWithAuth({
            loading: false,
            isAuthenticated: true,
            user: { id: "1", role: "ADMIN" },
            login: async () => {},
            logout: () => {},
        });

        expect(screen.getByText("Protected content")).toBeInTheDocument();
    });
});
