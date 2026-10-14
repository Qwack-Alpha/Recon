import type { Role } from "../types/auth";
export type { Role };
export const ROLES: Role[] = ["ADMIN", "OPS", "AUDITOR", "VIEWER"];
/**
 * Role guard sets mirroring the backend dependencies
 * (ReconAISphereFinal/app/core/dependencies.py).
 */
export const REQUIRE_ADMIN: Role[] = ["ADMIN"];
export const REQUIRE_OPS: Role[] = ["ADMIN", "OPS"];
export const REQUIRE_AUDITOR: Role[] = ["ADMIN", "AUDITOR", "OPS"];
export const REQUIRE_VIEWER: Role[] = ["ADMIN", "OPS", "AUDITOR", "VIEWER"];
export type Permission =
    | "dashboard.view"
    | "files.view"
    | "files.upload"
    | "transactions.view"
    | "reconciliation.view"
    | "reconciliation.run"
    | "reconciliation.match"
    | "exceptions.view"
    | "exceptions.assign"
    | "exceptions.resolve"
    | "cases.view"
    | "cases.manage"
    | "ai.use"
    | "reports.view"
    | "reports.export"
    | "audit.view";
/**
 * Maps every UI permission to the set of roles the backend authorises for the
 * corresponding endpoint. Keep this in sync with the API role guards.
 */
export const PERMISSION_ROLES: Record<Permission, Role[]> = {
    "dashboard.view": REQUIRE_VIEWER,
    "files.view": REQUIRE_VIEWER,
    "files.upload": REQUIRE_OPS,
    "transactions.view": REQUIRE_VIEWER,
    "reconciliation.view": REQUIRE_OPS,
    "reconciliation.run": REQUIRE_OPS,
    "reconciliation.match": REQUIRE_OPS,
    "exceptions.view": REQUIRE_AUDITOR,
    "exceptions.assign": REQUIRE_OPS,
    "exceptions.resolve": REQUIRE_OPS,
    "cases.view": REQUIRE_AUDITOR,
    "cases.manage": REQUIRE_OPS,
    "ai.use": REQUIRE_VIEWER,
    "reports.view": REQUIRE_VIEWER,
    "reports.export": REQUIRE_VIEWER,
    "audit.view": REQUIRE_AUDITOR,
};
export function hasRole(
    role: Role | undefined | null,
    allowed: Role[],
): boolean {
    return !!role && allowed.includes(role);
}
export function can(
    role: Role | undefined | null,
    permission: Permission,
): boolean {
    return hasRole(role, PERMISSION_ROLES[permission]);
}