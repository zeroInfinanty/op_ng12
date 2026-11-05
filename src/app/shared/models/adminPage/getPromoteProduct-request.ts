import { CommonHeaderRequest } from "../common/common-header-request";


export class GetPromoteProductRequest {
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
    productName!: string;
}

class Confirm {
    confirmId!: string;
}

class Stop {
    pitchClassify!: string;
}