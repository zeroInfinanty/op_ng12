/**
 * 共用的 response Header
 */

export class TokenHeaderResponse {
    constructor(init?: Partial<TokenHeaderResponse>) {
        Object.assign(this, init);
    }

    MSGID!: string;
    SOURCECHANNEL!: string;
    TXNSEQ!: string;
    RETURNCODE!: string;
    RETURNDESC!: string;
    O360SEQ!: string;
}