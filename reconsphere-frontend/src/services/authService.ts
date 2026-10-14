import api from "../api/client";

import type {
    LoginRequest,
    LoginResponse,
    CurrentUser,
} from "../types/auth";

export async function login(
    request: LoginRequest,
): Promise<LoginResponse> {

    const response = await api.post<LoginResponse>(
        "/auth/login",
        request,
    );

    return response.data;
}

export async function me(): Promise<CurrentUser> {

    const response = await api.get<CurrentUser>(
        "/auth/me",
    );

    return response.data;
}