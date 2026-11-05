import { CommonHeaderRequest } from "../common/common-header-request";


export class GetPromoteEmailRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}

class Body {
    token!: string;
    actionType!: string;
    create: Create = new Create;
    stop: Stop = new Stop;
}

class Create {
    emailClass!: string;
    emailClassNo!: string;
    email!: string;
    memo!: string;
}

class Stop {
    emailClass!: string;
    emailClassNo!: string;
}