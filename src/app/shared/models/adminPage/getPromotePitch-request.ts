import { CommonHeaderRequest } from "../common/common-header-request";


export class GetPromotePitchRequest {
    header!: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
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
    pitchClassify!: string;
    productPitch!: string;
    memo!: string;
}

class Confirm {
    confirmId!: string;
    pitchClassify!: string;
}

class Stop {
    pitchClassify!: string;
}