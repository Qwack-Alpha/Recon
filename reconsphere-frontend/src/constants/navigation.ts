import {
    MdDashboard,
    MdUploadFile,
    MdPayments,
    MdCompareArrows,
    MdWarning,
    MdWork,
    MdSmartToy,
    MdAssessment,
    MdHistory,
} from "react-icons/md";
import type { IconType } from "react-icons";
import type { Role } from "../auth/roles";
export interface NavigationItem {
    label: string;
    path: string;
    icon: IconType;
    roles: Role[];
}
export const navigation: NavigationItem[] = [
    {
        label: "Dashboard",
        path: "/",
        icon: MdDashboard,
        roles: ["ADMIN", "OPS", "AUDITOR", "VIEWER"]
    },
    {
        label: "Files",
        path: "/files",
        icon: MdUploadFile,
        roles: ["ADMIN", "OPS", "AUDITOR", "VIEWER"]
    },
    {
        label: "Transactions",
        path: "/transactions",
        icon: MdPayments,
        roles: ["ADMIN", "OPS", "AUDITOR", "VIEWER"]
    },
    {
        label: "Reconciliation",
        path: "/reconciliation",
        icon: MdCompareArrows,
        roles: ["ADMIN", "OPS"]
    },
    {
        label: "Exceptions",
        path: "/exceptions",
        icon: MdWarning,
        roles: ["ADMIN", "OPS", "AUDITOR"]
    },
    {
        label: "Cases",
        path: "/cases",
        icon: MdWork,
        roles: ["ADMIN", "OPS", "AUDITOR"]
    },
    {
        label: "AI Copilot",
        path: "/ai",
        icon: MdSmartToy,
        roles: ["ADMIN", "OPS", "AUDITOR", "VIEWER"]
    },
    {
        label: "Reports",
        path: "/reports",
        icon: MdAssessment,
        roles: ["ADMIN", "OPS", "AUDITOR", "VIEWER"]
    },
    {
        label: "Audit",
        path: "/audit",
        icon: MdHistory,
        roles: ["ADMIN", "AUDITOR", "OPS"]
    }
];
