import { CommonHeaderRequest } from "../common/common-header-request";

export class sendPromoteEmailResponse {
    constructor(init?: Partial<sendPromoteEmailResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body!: Body;
}

class Body {
    result!: string;
}