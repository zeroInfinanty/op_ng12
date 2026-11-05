/**
 * 共用的 Request Header
 */

export class TokenHeaderRequest {
    constructor(init?: Partial<TokenHeaderRequest>) {
        Object.assign(this, init);
    }

    MSGID!: string;
    SOURCECHANNEL!: string;
    TXNSEQ!: string;
}