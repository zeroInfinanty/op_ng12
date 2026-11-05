import { CommonHeaderRequest } from "../common/common-header-request";

export class GetPromoteSMSResponse {
    constructor(init?: Partial<GetPromoteSMSResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body!: Body;
}

class Body {
    records!: Records[];
}

class Records {
    smsClass!: string;
    smsClassNo!: string;
    className!: string;
    sms!: string;
    memo!: string;
    startDate!: string;
    endDate!: string;
    status!: string;
    createdId!: string;
    createDate!: string;
    comfirmId!: string;
    comfirmDate!: string;
}