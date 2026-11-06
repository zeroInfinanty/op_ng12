import { CommonHeaderResponse } from "../common/common-header-response";


export class DigitalUpgradeResponse {
    constructor(init?: Partial<DigitalUpgradeResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    pinApplyFlag!: string;
    designateFlag!: string;
    nonDesignateFlag!: string;
    sameidFlag!: string;
    dealFlag!:string;
    mixStatementFlag!:string;
    faceCheckApplyFlag!: string;
    phoneBindingFlag!: string;
    faceLevel!:string;
}


