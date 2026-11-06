import { CommonHeaderResponse } from "../common/common-header-response";


export class FinanceResponse {
    constructor(init?: Partial<FinanceResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    isSign!: string;
    mfInd!: string;
    sumPresentNTValue!: number;
    bondInd!: string;
    sumBondNetValue!: number;
    stdInd!: string;
    sumStdNetValue!: number;
    etfbdInd!: string;
    sumRefAmtNT!: number;
    roboInd!: string;
    sumMaketValueInvCcy!: number;
}



