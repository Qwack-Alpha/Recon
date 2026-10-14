import "./Dashboard.css";

import {
    MdSync,
    MdWarning,
    MdAccountBalance,
    MdPlayArrow,
} from "react-icons/md";

import {
    Card,
    Loader,
    EmptyState,
    PageContainer,
    SectionHeader,
    StatCard,
} from "../../components/common";

import ExceptionPieChart from "../../components/charts/ExceptionPieChart";

import { useDashboard } from "../../hooks/useDashboard";

export default function Dashboard() {

    const {
        summary,
        runs,
        banks,
        chart,
    } = useDashboard();

    const loading =
        summary.isLoading ||
        runs.isLoading ||
        banks.isLoading ||
        chart.isLoading;

    if (loading) {
        return <Loader />;
    }

    if (
        summary.isError ||
        runs.isError ||
        banks.isError ||
        chart.isError
    ) {
        return (
            <EmptyState
                title="Unable to load dashboard"
                message="Unable to load dashboard data."
            />
        );
    }

    return (

        <PageContainer>

            <SectionHeader
                title="Dashboard"
                subtitle="Enterprise Payment Reconciliation Overview"
            />

            <div className="statsGrid">

                <StatCard
                    title="Transactions"
                    value={summary.data?.total_transactions ?? 0}
                    icon={<MdSync />}
                />

                <StatCard
                    title="Exceptions"
                    value={summary.data?.exceptions ?? 0}
                    icon={<MdWarning />}
                />

                <StatCard
                    title="Banks"
                    value={summary.data?.banks ?? 0}
                    icon={<MdAccountBalance />}
                />

                <StatCard
                    title="Runs"
                    value={summary.data?.runs ?? 0}
                    icon={<MdPlayArrow />}
                />

            </div>

            <div className="dashboardGrid">

                <Card>

                    <h3>Recent Reconciliation Runs</h3>

                    <table className="dashboardTable">

                        <thead>

                            <tr>

                                <th>Run Id</th>

                                <th>Status</th>

                                <th>Started</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                runs.data?.length ? (

                                    runs.data.map(run => (

                                        <tr key={run.id}>

                                            <td>

                                                {run.id.slice(0, 8)}

                                            </td>

                                            <td>

                                                {run.status}

                                            </td>

                                            <td>

                                                {

                                                    new Date(

                                                        run.started_at

                                                    ).toLocaleString()

                                                }

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td colSpan={3}>

                                            No reconciliation runs available.

                                        </td>

                                    </tr>

                                )

                            }

                        </tbody>

                    </table>

                </Card>

                <Card>

                    <h3>Connected Banks</h3>

                    <table className="dashboardTable">

                        <thead>

                            <tr>

                                <th>Bank</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                banks.data?.length ? (

                                    banks.data.map(bank => (

                                        <tr key={bank.id}>

                                            <td>

                                                {bank.bank_name}

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td>

                                            No banks configured.

                                        </td>

                                    </tr>

                                )

                            }

                        </tbody>

                    </table>

                </Card>

            </div>

            <div className="dashboardGrid">

                <Card>

                    <h3>

                        Exception Severity

                    </h3>

                    {

                        chart.data &&

                        <ExceptionPieChart

                            data={chart.data}

                        />

                    }

                </Card>

                <Card>

                    <h3>

                        Quick Actions

                    </h3>

                    <div className="quickActions">

                        <button>

                            Upload Payment File

                        </button>

                        <button>

                            Start Reconciliation

                        </button>

                        <button>

                            Review Exceptions

                        </button>

                    </div>

                </Card>

            </div>

        </PageContainer>

    );

}