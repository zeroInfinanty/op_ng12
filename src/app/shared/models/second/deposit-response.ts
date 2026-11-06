import { CommonHeaderResponse } from "../common/common-header-response";


export class DepositResponse {
    constructor(init?: Partial<DepositResponse>) {
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
    type!: string;
    acctNo!: string;
    ccyCode!: string;
    ccyDesc!: string;
    sourceSystemCode!: string;
    productId!: string;
    productName!: string;
    ntCurrentBal!: string;
    r12MthAvgNTBal!: string;
    isCathSecSettleAcct!: string;
}

class CdDetail {
    type!: string;
    acctNo!: string;
    ccyCode!: string;
    ccyDesc!: string;
    sourceSystemCode!: string;
    productId!: string;
    productName!: string;
    currentNTBal!: string;
    r12MthAvgNTBal!: string;
    r3YBouncedChkCnt!: string;
    r3YCancelledChkCnt!: string;
    lastRejectedDate!:string;
    isRejectedAcct!: string;
}

class TdDetail {
    type!: string;
    acctNo!: string;
    ccyCode!: string;
    ccyDesc!: string;
    sourceSystemCode!: string;
    productId!: string;
    productName!: string;
    currentNTBal!: string;
    r12MthAvgNTBal!: string;
    isAutoExtend!: string;
}


