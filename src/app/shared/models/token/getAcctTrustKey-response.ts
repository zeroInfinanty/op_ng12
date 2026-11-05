import { CommonHeaderResponse } from "../common/common-header-response";

export class GetAcctTrustKeyResponse {
    constructor(init?: Partial<GetAcctTrustKeyResponse>) {
        Object.assign(this, init);
    }
    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    token!: string;
    uniqueNumber!: string;
}