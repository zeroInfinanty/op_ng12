import { CommonHeaderResponse } from "../common/common-header-response";


export class CustProfileComBlockResponse {
    constructor(init?: Partial<CustProfileComBlockResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    corpCount!: number;
    corpRs!: CorpRs[];
}

class CorpRs {
    picCorpId!: string;
    picComName!: string;
    picComLbLimitInd!: string;
    tradeCorpFlag!: string;
    companyTag!: string;
    pitch!: string;
}


