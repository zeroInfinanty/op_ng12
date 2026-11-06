import { CommonHeaderResponse } from "../common/common-header-response";


export class LbcResponse {
    constructor(init?: Partial<LbcResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    linebcConnStatus!: string;
    snapshotData!: string;
    productPitch!: string;
}

