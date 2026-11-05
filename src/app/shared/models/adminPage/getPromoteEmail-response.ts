import { CommonHeaderRequest } from "../common/common-header-request";


export class GetPromoteEmailResponse {
    constructor(init?: Partial<GetPromoteEmailResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body!: Body;
}

class Body {
    records!: Records[];
}

class Records {
    emailClass!: string;
    emailClassNo!: string;
    className!: string;
    email!: string;
    memo!: string;
    startDate!: string;
    endDate !: string;
    status!: string;
    createdId!: string;
    createDate!: string;
    comfirmId!: string;
    comfirmDate!: string;
}