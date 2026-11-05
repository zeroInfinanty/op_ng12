import { CommonHeaderResponse } from './common-header-response';
/**
 *  共用的 response Object
 */

export class CommonResponse {
    header: CommonHeaderResponse = new CommonHeaderResponse;
    body: any;
}