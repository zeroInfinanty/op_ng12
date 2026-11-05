import { CommonHeaderRequest } from "../common/common-header-request";

export class sendPromoteMsgResponse {
    constructor(init?: Partial<sendPromoteMsgResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body!: Body;
}

class Body {
    result!: string;
}