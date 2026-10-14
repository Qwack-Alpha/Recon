import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import RequireRole from "./routes/RequireRole";
import {
    REQUIRE_OPS,
    REQUIRE_AUDITOR,
} from "./auth/roles";
import AICopilot from "./pages/ai/AICopilot";
import Audit from "./pages/audit/Audit";
import Cases from "./pages/cases/Cases";
import Exceptions from "./pages/exceptions/Exceptions";
import Reconciliation from "./pages/reconciliation/Reconciliation";
import Transactions from "./pages/transactions/Transactions";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Files from "./pages/files/Files";
import Reports from "./pages/reports/Reports";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route
                        index
                        element={<Dashboard />}
                    />
                    <Route
                        path="files"
                        element={<Files />}
                    />
                    <Route
                        path="transactions"
                        element={<Transactions />}
                    />
                    <Route
                        path="reconciliation"
                        element={
                            <RequireRole roles={REQUIRE_OPS}>
                                <Reconciliation />
                            </RequireRole>
                        }
                    />
                    <Route
                        path="exceptions"
                        element={
                            <RequireRole roles={REQUIRE_AUDITOR}>
                                <Exceptions />
                            </RequireRole>
                        }
                    />
                    <Route
                        path="cases"
                        element={
                            <RequireRole roles={REQUIRE_AUDITOR}>
                                <Cases />
                            </RequireRole>
                        }
                    />
                    <Route
                        path="ai"
                        element={<AICopilot />}
                    />
                    <Route
                        path="reports"
                        element={<Reports />}
                    />
                    <Route
                        path="audit"
                        element={
                            <RequireRole roles={REQUIRE_AUDITOR}>
                                <Audit />
                            </RequireRole>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}