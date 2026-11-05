import { CommonHeaderRequest } from "../common/common-header-request";


export class GetPromoteSMSRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
    req: any;
}

class Body {
    token!: string;
    actionType!: string;
    create?: Create = new Create;
    confirm?: Confirm = new Confirm;
    stop?: Stop = new Stop;
    delete?: Stop = new Stop;
}

class Create {
    smsClass!: string;
    smsClassNo!: string;
    sms!: string;
    memo!: string;
}

class Confirm {
    confirmId!: string;
    smsClass!: string;
    smsClassNo!: string;
}

class Stop {
    smsClass!: string;
    smsClassNo!: string;
}