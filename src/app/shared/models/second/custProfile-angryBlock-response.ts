import { CommonHeaderResponse } from "../common/common-header-response";


export class CustProfileAngryBlockResponse {
    constructor(init?: Partial<CustProfileAngryBlockResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    updateDate!: string;
    complaint!: Complaint[];
}

class Complaint {
    detail_desc!: string;
    start_call_date!: string;
}

