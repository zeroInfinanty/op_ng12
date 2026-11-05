import { CommonHeaderRequest } from "../common/common-header-request";


export class SetCustMMBSMSRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}

class Body {
    token!: string;
    uniqueNumber!: string;
    smsClass!: string;
    smsClassNo!: string
}

