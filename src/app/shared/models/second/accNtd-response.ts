import { CommonHeaderResponse } from "../common/common-header-response";


export class AccNtdResponse {
    constructor(init?: Partial<AccNtdResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    sdDetail!: SdDetail[];
    cdDetail!: CdDetail[];
    tdDetail!: TdDetail[];
    
}

class SdDetail {
    accType!: string;
    acctNbr!: string;
    currencyCode!:string;
    currencyChineseName !: string;
    sourceSystemCode!: string;
    productId!: string;
    productDesc!:string;
    ntdCurrentBal!: string;
    ntdY1AvgBal!: string;
    cathaySecFlag!:string;
    branchCode!:string;
}

class CdDetail {
    accType!: string;
    acctNbr!: string;
    currencyCode!:string;
    currencyChineseName !: string;
    sourceSystemCode!: string;
    productId!: string;
    productDesc!:string;
    ntdCurrentBal!: string;
    ntdY1AvgBal!: string;
    dishY3ChkCnt!:string;
    dishCance1Y3ChkCnt!:string;
    lastRejectedDate!:string;
    rejectedStatusInd!:string;
    branchCode!:string;
}

class TdDetail {
    accType!: string;
    acctNbr!: string;
    currencyCode!:string;
    currencyChineseName !: string;
    sourceSystemCode!: string;
    productId!: string;
    productDesc!:string;
    ntdCurrentBal!: string;
    ntdY1AvgBal!: string;
    autoExtendInd!:string;
    branchCode!:string;
}