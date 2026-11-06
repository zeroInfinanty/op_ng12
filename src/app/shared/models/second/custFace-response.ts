import { CommonHeaderResponse } from "../common/common-header-response";


export class CustFaceResponse {
    constructor(init?: Partial<CustFaceResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    photo!: string;
}