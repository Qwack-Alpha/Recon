import { describe, it, expect, beforeEach } from "vitest";
import { TokenStorage } from "../utils/tokenStorage";

describe("TokenStorage", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("stores and retrieves access and refresh tokens", () => {
        TokenStorage.set("access-token", "refresh-token");

        expect(TokenStorage.access()).toBe("access-token");
        expect(TokenStorage.refresh()).toBe("refresh-token");
    });

    it("clears tokens from storage", () => {
        TokenStorage.set("access-token", "refresh-token");
        TokenStorage.clear();

        expect(TokenStorage.access()).toBeNull();
        expect(TokenStorage.refresh()).toBeNull();
    });
});
