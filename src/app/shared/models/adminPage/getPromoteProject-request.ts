import { CommonHeaderRequest } from "../common/common-header-request";


export class GetPromoteProjectRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
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
    projectName!: string;
}

class Confirm {
    confirmId!: string;
    projectName!: string;
}

class Stop {
    projectName!: string;
}