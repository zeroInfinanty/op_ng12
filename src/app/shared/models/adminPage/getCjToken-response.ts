import { TokenHeaderResponse } from '../common/token-header-response';

export class GetCjTokenResponse {
    constructor(init?: Partial<GetCjTokenResponse>) {
        Object.assign(this, init);
    }

    MWHEADER!: TokenHeaderResponse;
    TRANRS: Body = new Body();
}

class Body {
    token!: string;
    expireTime!: string;
}