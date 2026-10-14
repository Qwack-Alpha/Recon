import {
    createContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import type {
    ReactNode,
} from "react";

import {
    login,
    me,
} from "../services/authService";

import type {
    LoginRequest,
    CurrentUser,
} from "../types/auth";

import {
    TokenStorage,
} from "../utils/tokenStorage";

type AuthContextType = {

    user: CurrentUser | null;

    loading: boolean;

    isAuthenticated: boolean;

    login: (request: LoginRequest) => Promise<void>;

    logout: () => void;

};

export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);

interface AuthProviderProps {

    children: ReactNode;

}

export function AuthProvider({

    children,

}: AuthProviderProps) {

    const [user, setUser] = useState<CurrentUser | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        void restore();

    }, []);

    async function restore() {

        const token = TokenStorage.access();

        if (!token) {

            setLoading(false);

            return;

        }

        try {

            const current = await me();

            setUser(current);

        } catch {

            TokenStorage.clear();

        } finally {

            setLoading(false);

        }

    }

    async function loginUser(
        request: LoginRequest,
    ) {

        const tokens = await login(request);

        TokenStorage.set(
            tokens.access_token,
            tokens.refresh_token,
        );

        const current = await me();

        setUser(current);

    }

    function logout() {

        TokenStorage.clear();

        setUser(null);

    }

    const value = useMemo(
        () => ({
            user,
            loading,
            logout,
            isAuthenticated: !!user,
            login: loginUser,
        }),
        [
            user,
            loading,
        ],
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}