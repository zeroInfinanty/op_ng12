import { CommonHeaderResponse } from "../common/common-header-response";


export class CustContactBlockResponse {
    constructor(init?: Partial<CustContactBlockResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    bkcCompanyPhoneInd!: string;
    bkcEmailInd!: string;
    bkcHomePhoneInd!: string;
    bkcMobilePhoneInd!: string;
    bkcRegisterAddressInd!:string;
    bkcStatementAddressInd!: string;
    ccCompanyPhoneInd!: string;
    ccEmailInd!: string;
    ccHomePhoneInd!: string;
    ccMobilePhoneInd!: string;
    ccRegisterAddressInd!: string;
    ccStatementAddressInd!: string;
    customerName!: string;
    genderTypeCode!: string;
    pitch!: string;
}
