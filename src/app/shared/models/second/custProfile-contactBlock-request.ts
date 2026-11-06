import { CommonHeaderRequest } from "../common/common-header-request";


export class CustContactBlockRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}

class Body {
    token!: string;
    uniqueNumber!: string;
    isMediumRisk!: string;
}