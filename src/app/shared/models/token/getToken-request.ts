import { CommonHeaderRequest } from "../common/common-header-request";


export class GetTokenRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}

class Body {
    branchId!: string;
    empCode!: string;
    clientIp!: string;
    systemId!: string;
}