import { CommonHeaderResponse } from "../common/common-header-response";


export class CustProfileUpVipBlockResponse {
    constructor(init?: Partial<CustProfileUpVipBlockResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    vip_info!: VipInfo;
    
}

class VipInfo {
    txt_calligraphy!: string;
    memo1!: string;
    memo2!: string;
}

