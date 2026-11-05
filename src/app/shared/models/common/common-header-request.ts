/**
 *  共用的 request header
 */

export class CommonHeaderRequest {
    constructor(init?: Partial<CommonHeaderRequest>) {
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