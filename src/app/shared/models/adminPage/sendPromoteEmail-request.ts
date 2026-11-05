import { CommonHeaderRequest } from "../common/common-header-request";


export class SendPromoteEmailRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
    req: any;
}

class Body {
    token!: string;
    uniqueNumber!: string;
    strProject!: string;
    strName!: string;
    strToCust!: string;
    strCustID!: string;
    strContentValue!: StrContentValue;
}

class StrContentValue {
    '00#': string;
    '01#': string;
    '02#': string;
    '03#': string;
    '04#': string;
    '05#': string;
}

