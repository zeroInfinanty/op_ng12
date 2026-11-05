/**
 *  共用的 response header
 */


export class CommonHeaderResponse {
    constructor(init?: Partial<CommonHeaderResponse>) {
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
    returnDesc!: string;

}