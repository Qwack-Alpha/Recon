export interface DashboardSummary{

    total_transactions:number;

    exceptions:number;

    banks:number;

    runs:number;

}

export interface RecentRun{

    id:string;

    started_at:string;

    status:string;

}

export interface BankSummary{

    id:string;

    bank_name:string;

}

export interface ExceptionChart{

    critical:number;

    high:number;

    medium:number;

    low:number;

}
