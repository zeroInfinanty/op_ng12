import { CommonHeaderResponse } from "../common/common-header-response";


export class CustProfileHandTransferResponse {
    constructor(init?: Partial<CustProfileHandTransferResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    snapshotDate!: number;
    prodList!: ProdList[];
}

class ProdList {
    systemNbr!: string;
    productHoldDesc!: string;
    introduceEmpCode!:string;
    intrEndDate!: string;
}

