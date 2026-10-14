import { useAuth } from "./useAuth";
import { can, hasRole } from "./roles";
import type { Permission, Role } from "./roles";
/**
 * Convenience hook for role-based access checks in components.
 *
 * Example:
 *   const { can } = usePermissions();
 *   {can("files.upload") && <UploadCard ... />}
 */
export function usePermissions() {
    const { user } = useAuth();
    const role = user?.role ?? null;
    return {
        role,
        can: (permission: Permission) => can(role, permission),
        hasRole: (allowed: Role[]) => hasRole(role, allowed),
    };
}

