export interface ExceptionSummary{

id:string;

exception_code:string;

exception_type:string;

severity:string;

related_reference:string;

amount:number;

currency:string;

assigned_to:string|null;

status:string;

detected_at:string;

}

export interface AssignExceptionRequest{

user_id:string;

}

export interface ResolveExceptionRequest{

resolution_notes:string;

}
