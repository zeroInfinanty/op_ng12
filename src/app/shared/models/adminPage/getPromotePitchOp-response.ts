import { CommonHeaderRequest } from "../common/common-header-request";


export class getPromotePitchOpResponse {
    constructor(init?: Partial<getPromotePitchOpResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body!: Body;
}

class Body {
    records!: Records[];
}

class Records {
    pitchClassify!: string;
    productPitch!: string;
    memo!: string;
    startDate!: string;
    endDate!: string;
    status!: string;
    createdId!: string;
    createDate!: string;
    comfirmId!: string;
    comfirmDate!: string;
}