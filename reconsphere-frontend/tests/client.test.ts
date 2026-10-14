import { describe, it, expect, vi, beforeEach } from "vitest";
import api from "../api/client";

vi.mock("../utils/tokenStorage", () => ({
    TokenStorage: {
        access: vi.fn(),
        clear: vi.fn(),
    },
}));

const { TokenStorage } = await import("../utils/tokenStorage");

describe("api client", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it("adds Authorization header when access token exists", async () => {
        (TokenStorage.access as vi.Mock).mockReturnValue("abc123");
        const config = { headers: {} } as any;

        const fulfilled = api.interceptors.request.handlers[0].fulfilled;
        const result = await fulfilled(config);

        expect(result.headers.Authorization).toBe("Bearer abc123");
    });

    it("does not add Authorization header when no token exists", async () => {
        (TokenStorage.access as vi.Mock).mockReturnValue(null);
        const config = { headers: {} } as any;

        const fulfilled = api.interceptors.request.handlers[0].fulfilled;
        const result = await fulfilled(config);

        expect(result.headers.Authorization).toBeUndefined();
    });

    it("returns the response unchanged on successful response", async () => {
        const response = { data: { ok: true } };
        const fulfilled = api.interceptors.response.handlers[0].fulfilled;

        const result = await fulfilled(response);

        expect(result).toBe(response);
    });

    it("clears token and redirects on 401 response", async () => {
        const originalLocation = window.location;
        const assignMock = vi.fn();
        Object.defineProperty(window, "location", {
            configurable: true,
            value: {
                ...originalLocation,
                assign: assignMock,
                pathname: "/",
            },
        });

        const response = { response: { status: 401 } };

        const rejected = api.interceptors.response.handlers[0].rejected;
        await expect(rejected(response)).rejects.toEqual(response);

        expect(TokenStorage.clear).toHaveBeenCalled();
        expect(assignMock).toHaveBeenCalledWith("/login");

        Object.defineProperty(window, "location", {
            configurable: true,
            value: originalLocation,
        });
    });

    it("clears token on 401 but does not redirect when already on /login", async () => {
        const originalLocation = window.location;
        const assignMock = vi.fn();
        Object.defineProperty(window, "location", {
            configurable: true,
            value: {
                ...originalLocation,
                assign: assignMock,
                pathname: "/login",
            },
        });

        const response = { response: { status: 401 } };

        const rejected = api.interceptors.response.handlers[0].rejected;
        await expect(rejected(response)).rejects.toEqual(response);

        expect(TokenStorage.clear).toHaveBeenCalled();
        expect(assignMock).not.toHaveBeenCalled();

        Object.defineProperty(window, "location", {
            configurable: true,
            value: originalLocation,
        });
    });

    it("does not clear tokens or redirect on non-401 error", async () => {
        const originalLocation = window.location;
        const assignMock = vi.fn();
        Object.defineProperty(window, "location", {
            configurable: true,
            value: {
                ...originalLocation,
                assign: assignMock,
                pathname: "/",
            },
        });

        const response = { response: { status: 500 } };

        const rejected = api.interceptors.response.handlers[0].rejected;
        await expect(rejected(response)).rejects.toEqual(response);

        expect(TokenStorage.clear).not.toHaveBeenCalled();
        expect(assignMock).not.toHaveBeenCalled();

        Object.defineProperty(window, "location", {
            configurable: true,
            value: originalLocation,
        });
    });
});
