/** 共通的 Request header */


export class TokenCommonHeaderRequest {
    constructor(init?: Partial<TokenCommonHeaderRequest>) {
        Object.assign(this, init);
    }

    apId!: string ;
    branchId!: string ;
    employeeId!: string ;
    clientId!: string ;
    role!: string ;
    roleCode!: string ;
    txnDateTime!: string;
    returnCode!: string;
 }