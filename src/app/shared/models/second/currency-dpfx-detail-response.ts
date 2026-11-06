import { CommonHeaderResponse } from "../common/common-header-response";


export class CurrencyDPFXDetailResponse {
    constructor(init?: Partial<CurrencyDPFXDetailResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    lightLevel!:string;
    sdDetail!: Detail[];
    tdDetail!: Detail[];
    
}

class Detail {
    type!: string;
    acctNo!: string;
    ccyCode!: string;
    ccyDesc!: string;
    sourceSystemCode!: string;
    productId!: string;
    productName!: string;
    currentBal!: string;
    currentNTBal!: string;
    r12MthAvgNTBal!: string;
    acctStatusCode!: string;
}