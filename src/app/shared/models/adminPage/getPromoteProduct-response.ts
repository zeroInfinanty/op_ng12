import { CommonHeaderRequest } from "../common/common-header-request";

export class GetPromoteProductResponse {
    constructor(init?: Partial<GetPromoteProductResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body!: Body;
}

class Body {
    records!: Records[];
}

class Records {
    seqNo!: string;
    productName!: string;
    startDate!: string;
    endDate!: string;
    status!: string;
    createdId!: string;
    createDate!: string;
    comfirmId!: string;
    comfirmDate!: string;
}