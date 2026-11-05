import { CommonHeaderRequest } from "../common/common-header-request";

export class SetCustROBOSMSResponse {
    constructor(init?: Partial<SetCustROBOSMSResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body: Body = new Body;
}

class Body {
    strNotifyType!: string;
    sms!: string
    longUrl!:string;
    securityBranchCode!:string;
}


