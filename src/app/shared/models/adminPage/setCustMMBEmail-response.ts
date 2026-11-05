import { CommonHeaderRequest } from "../common/common-header-request";

export class setCustMMBEmailResponse {
    constructor(init?: Partial<setCustMMBEmailResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body: Body = new Body;
}

class Body {
    strProject!: string;
    contentValue!: ContentValue[];
}

class ContentValue {
    '00#': string;
    '01#': string;
    '02#': string;
    '03#': string;
    '04#': string;
    '05#': string;
}
