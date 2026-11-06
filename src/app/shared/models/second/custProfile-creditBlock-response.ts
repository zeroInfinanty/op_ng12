import { CommonHeaderResponse } from "../common/common-header-response";


export class CustProfileCreditBlockResponse {
    constructor(init?: Partial<CustProfileCreditBlockResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    progressInd!: string;
    cardCount!: string;
    upgradeInd!: string;
    expirePoints!: number;
    cCDetail!: CCDetail[];
    closeDetail!: CloseDetail[];
    pointDetail!: PointDetail[];
    freeGiftDetail !: FreeGiftDetail[];
}

class CCDetail {
    cardNo!: string;
    cardName!: string;
    kindName!: string;
    primaryCardInd!: string;
    customerName!: string;
    acctOpenDate!: string;
    creditCardUpgradeInd!: string;
}

class CloseDetail {
    cardNbr!: string;
    cardName!: string;
    kindName!: string;
    primaryCardInd!: string;
    customerName!: string;
    acctOpenDate!: string;
    acctCloseDate!: string;
}

class PointDetail {
    category!: string;
    totalPoint!: string;
    expiredPoint!: string;
}

class FreeGiftDetail {
    cFirstCardNo!: string;
    cardName!:string;
    pid!: string;
    cGiftExpiredDate!:string;
    cDifferenceCnt!:string;
}


