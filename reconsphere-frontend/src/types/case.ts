export interface InvestigationCaseSummary{

id:string;

case_number:string;

transaction_reference:string;

title:string;

priority:string;

owner:string|null;

status:string;

due_date:string|null;

}

export interface InvestigationOverview{

id:string;

case_number:string;

transaction_reference:string;

title:string;

description:string|null;

priority:string;

owner:string|null;

status:string;

due_date:string|null;

created_at:string;

}

export interface RelatedTransaction{

payment_reference:string;

bank_reference:string|null;

payment_amount:number;

bank_amount:number|null;

difference:number|null;

}

export interface TimelineItem{

changed_at:string;

changed_by:string;

from_status:string|null;

to_status:string;

remarks:string|null;

}

export interface CaseComment{

id:string;

user:string;

comment:string;

created_at:string;

}

export interface CaseAttachment{

id:string;

file_name:string;

blob_url:string;

uploaded_by:string;

uploaded_at:string;

}

export interface InvestigationCaseResponse{

overview:InvestigationOverview;

ai_explanation:string|null;

ai_recommendation:string|null;

confidence_score:number|null;

related_transactions:RelatedTransaction[];

timeline:TimelineItem[];

comments:CaseComment[];

attachments:CaseAttachment[];

}
