import type { ReactNode } from "react";
import { useAuth } from "../auth/useAuth";
import { hasRole } from "../auth/roles";
import type { Role } from "../auth/roles";
import { EmptyState } from "../components/common";
interface RequireRoleProps {
    roles: Role[];
    children: ReactNode;
}
/**
 * Route-level authorisation guard. Renders the children only when the current
 * user's role is permitted; otherwise shows an access-denied message.
 * Must be used inside an authenticated branch (see ProtectedRoute).
 */
export default function RequireRole({
    roles,
    children,
}: RequireRoleProps) {
    const { user } = useAuth();
    if (!hasRole(user?.role, roles)) {
        return (
            <EmptyState
                title="Access denied"
                message="You do not have permission to view this page."
            />
        );
    }
    return <>{children}</>;
}