import { CommonHeaderRequest } from "../common/common-header-request";

export class SetCustCCardSMSResponse {
    constructor(init?: Partial<SetCustCCardSMSResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body: Body = new Body;
}

class Body {
    strNotifyType!: string;
    sms!: string;
    longUrl!:string;
    securityBranchCode!:string;
}
