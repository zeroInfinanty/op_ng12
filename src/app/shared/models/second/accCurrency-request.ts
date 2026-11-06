import { CommonHeaderRequest } from "../common/common-header-request";


export class AccCurrencyRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}

class Body {
    token!: string;
    uniqueNumber!: string;
}