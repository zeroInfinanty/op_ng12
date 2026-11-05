import { CommonHeaderRequest } from "../common/common-header-request";


export class SendPromoteMsgRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
    req: any;
}

class Body {
    token!: string;
    uniqueNumber!: string;
    strType!: string;
    strToCust!: string;
    strSubject!: string;
    strBody!: string;
    strNotifyType!: string;
    strID!: string;
    strName!: string;
    strLay3!: string;
    strSendType!: string;
}

