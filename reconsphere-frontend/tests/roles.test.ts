import { describe, it, expect } from "vitest";
import { hasRole, can, REQUIRE_AUDITOR, REQUIRE_OPS } from "../auth/roles";

describe("roles helpers", () => {
    it("returns true when user role is allowed", () => {
        expect(hasRole("AUDITOR", REQUIRE_AUDITOR)).toBe(true);
    });

    it("returns false when user role is not allowed", () => {
        expect(hasRole("VIEWER", REQUIRE_AUDITOR)).toBe(false);
    });

    it("supports permission-based role checks", () => {
        expect(can("OPS", "reconciliation.view")).toBe(true);
        expect(can("VIEWER", "reconciliation.view")).toBe(false);
    });
});
