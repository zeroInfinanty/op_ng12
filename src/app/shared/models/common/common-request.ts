import { CommonHeaderRequest } from './common-header-request';
/**
 *  共用的 request Object
 */

export class CommonRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}

class Body {
    uniqueNumber !: string;
    trustKey!: string;
}