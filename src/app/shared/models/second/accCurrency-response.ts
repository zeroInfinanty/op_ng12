import { CommonHeaderResponse } from "../common/common-header-response";


export class AccCurrencyResponse {
    constructor(init?: Partial<AccCurrencyResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    sdDetail!: SdDetail[];
    tdDetail!: TdDetail[];
    
}

class SdDetail {
    type!: string;
    acctNo!: string;
    ccyCode!: string;
    ccyDesc!: string;
    sourceSystemCode!: string;
    productId!: string;
    productName!: string;
    currntBal!: string;
    currentNTBal!: string;
    r12MthAvgNTBal!: string;
    acctStatusCode!: string;
}

class TdDetail {
    type!: string;
    acctNo!: string;
    ccyCode!: string;
    ccyDesc!: string;
    sourceSystemCode!: string;
    productId!: string;
    productName!: string;
    currntBal!: string;
    currentNTBal!: string;
    r12MthAvgNTBal!: string;
    acctStatusCode!: string;
}