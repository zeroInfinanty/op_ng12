import { CommonHeaderRequest } from "../common/common-header-request";

export class SetCustMMBSMSResponse {
    constructor(init?: Partial<SetCustMMBSMSResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderRequest;
    body!: Body;
}

class Body {
    strNotifyType!: string;
    sms!: string;
    longUrl!:string;
    securityBranchCode!:string; 
}


