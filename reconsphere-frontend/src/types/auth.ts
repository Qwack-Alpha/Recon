export type Role = "ADMIN" | "OPS" | "AUDITOR" | "VIEWER";
export interface LoginRequest {
    email: string;
    password: string;
}
export interface LoginResponse {
    access_token: string;
    refresh_token: string;
    token_type?: string;
}
export interface CurrentUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: Role;
    organization_id: string;
}