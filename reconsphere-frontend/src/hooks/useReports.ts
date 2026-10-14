import {
    useMutation,
    useQuery,
} from "@tanstack/react-query";
import {
    getDashboardReport,
    exportReport,
    downloadReport,
} from "../services/reportService";
export function useReports() {
    const report = useQuery({
        queryKey: ["reports-dashboard"],
        queryFn: getDashboardReport,
    });
    const exportReportMutation = useMutation({
        mutationFn: exportReport,
    });
    const downloadMutation = useMutation({
        mutationFn: downloadReport,
    });
    return {
        report,
        exportReport: exportReportMutation,
        download: downloadMutation,
    };
}