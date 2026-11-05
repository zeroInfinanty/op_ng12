import { CommonHeaderRequest } from "../common/common-header-request";


export class GetAcctTrustKeyRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}

class Body {
    branchId!: string;
    empCode!: string;
    clientIp!: string;
    queryItem!: string;
    customerInfo!: string;
}