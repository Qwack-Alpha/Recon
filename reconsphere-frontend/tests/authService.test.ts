import { describe, it, expect, vi, afterEach } from "vitest";
import api from "../api/client";
import { login, me } from "../services/authService";

vi.mock("../api/client", () => ({
    default: {
        post: vi.fn(),
        get: vi.fn(),
    },
}));

describe("authService", () => {
    afterEach(() => {
        vi.resetAllMocks();
    });

    it("calls api.post on login", async () => {
        const fakeResponse = { data: { access_token: "an-access", refresh_token: "a-refresh" } };
        (api.post as unknown as vi.Mock).mockResolvedValue(fakeResponse);

        const result = await login({ email: "test@example.com", password: "pass" });

        expect(api.post).toHaveBeenCalledWith("/auth/login", {
            email: "test@example.com",
            password: "pass",
        });
        expect(result).toEqual(fakeResponse.data);
    });

    it("calls api.get on me", async () => {
        const fakeUser = { id: "1", first_name: "Test", last_name: "User", email: "test@example.com", role: "ADMIN", organization_id: "org1" };
        (api.get as unknown as vi.Mock).mockResolvedValue({ data: fakeUser });

        const result = await me();

        expect(api.get).toHaveBeenCalledWith("/auth/me");
        expect(result).toEqual(fakeUser);
    });
});
