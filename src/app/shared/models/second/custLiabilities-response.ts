import { CommonHeaderResponse } from "../common/common-header-response";


export class custLiabilitiesResponse {
    constructor(init?: Partial<custLiabilitiesResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    dataDate!: string;
    totalMtgAmt!: number;
    totalMtgBal!: number;
    totalMtgCnt!: number;
    totalCdtAmt!: number;
    totalCdtBal!: number;
    totalCdtCnt!: number;
    totalOtlAmt!: number;
    totalOtlBal!: number;
    totalOtlCnt!: number;
}