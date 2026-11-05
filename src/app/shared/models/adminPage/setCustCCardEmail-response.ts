import { CommonHeaderRequest } from "../common/common-header-request";

export class SetCustCCardEmailResponse {
    constructor(init?: Partial<SetCustCCardEmailResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body!: Body;
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