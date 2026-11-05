import { TokenHeaderRequest } from '../common/token-header-request';

export class GetCjTokenRequest {
    MWHEADER!: TokenHeaderRequest = new TokenHeaderRequest();
    TRANRQ: Tranrq = new Tranrq();

}


class Tranrq {
    branchId!: string;
    empCode!: string;
    clientId!: string;
    systemId!: string;
}