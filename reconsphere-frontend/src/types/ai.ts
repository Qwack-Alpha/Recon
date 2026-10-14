export interface AIQuestionRequest{

question:string;

case_id?:string|null;

}

export interface AIChatMessage{

role:string;

message:string;

created_at:string;

}

export interface AIChatResponse{

answer:string;

tokens_used:number;

conversation:AIChatMessage[];

}

export interface ConversationHistoryItem{

id:string;

question:string;

created_at:string;

}

export interface ConversationHistoryResponse{

history:ConversationHistoryItem[];

}

export interface EvidenceItem{

    field:string;

    payment:string;

    bank:string;

    result:string;

}

export interface AIInsightResponse{

    summary:string;

    root_cause:string;

    business_explanation:string;

    operational_domain:string;

    business_impact:string;

    confidence:number;

    evidence:EvidenceItem[];

    recommended_actions:string[];

}
