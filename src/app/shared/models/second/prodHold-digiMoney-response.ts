import { CommonHeaderResponse } from "../common/common-header-response";


export class ProdHoldDigiMoneyResponse {
    constructor(init?: Partial<ProdHoldDigiMoneyResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    cardList!: CardList[];
    productPitch!: string;
}

class CardList {
    acctNbr!: string;
    debitCardType!: string;
    debitCardApplyStatus!: string;
    cardLessWithdrawalStatus!: string;
    useFrequency!: string;
    snapshotDate!: string;
}


