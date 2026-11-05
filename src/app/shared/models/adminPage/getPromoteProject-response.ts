import { CommonHeaderRequest } from "../common/common-header-request";

export class GetPromoteProjectResponse {
    constructor(init?: Partial<GetPromoteProjectResponse>) {
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
    projectName!: string;
    startDate!: string;
    endDate!: string;
    status!: string;
    createdId!: string;
    createDate!: string;
    comfirmId!: string;
    comfirmDate!: string;
}