import { CommonHeaderResponse } from "../common/common-header-response";


export class InsuranceResponse {
    constructor(init?: Partial<InsuranceResponse>) {
        Object.assign(this, init);
    }

    header!: CommonHeaderResponse;
    body!: Body;
}

class Body {
    customerId!: string;
    liftCnt!: number;
    liftBal!: number;
    lifeInfo!: LifeInfo[];
    propertyCnt!: number;
    propertyInfo!: PropertyInfo[];
    propertyBal!: number;
}

class LifeInfo {
    insPolicyNo!: string;
    insProductName!: string;
    effectiveData!: string;
    expiryDate!: string;
    ccyDesc!: string;
    insAmt!: number;
    yearInsFee!: number;
    accuPaidInsFee!: number;
    salesEmpId!: string;
}

class PropertyInfo {
    insPolicyNo!: string;
    insProductName!: string;
    signingData!: string;
    expiryData!: string;
    ccyDesc!: string;
    yearInsFee!: string;
    salesEmpId!: string;
}
