import { CommonHeaderResponse } from "../common/common-header-response";


export class MmbResponse {
    constructor(init?: Partial<MmbResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    netBankLoginStatus!: string;
    netBankApplyStatus!: string;
    netBankPwdStatusCode!: number;
    nonPredesignatedApply!: string;
    transTokenApplyStatus!: string;
    faceCheckApplyStatus!: string;
    mmbUseFrequency!: string;
    netBankUseFrequency!: string;
    snapshotDate!: string;
    netBankLevel!: string;
    netBankLightLevel!: string;
    authStatus?:string;
    channel?:string;
    
}


