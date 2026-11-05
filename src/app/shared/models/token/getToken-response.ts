import { CommonHeaderResponse } from "../common/common-header-response";

export class GetTokenResponse {
    constructor(init?: Partial<GetTokenResponse>) {
        Object.assign(this, init);
    }
    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    token!: string;
    expriedTime!: string;
}