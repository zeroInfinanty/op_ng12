import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDataModel {

}

export interface LoginData {
    apid: string;
    eipToken: string;
    employeeId: string;
    branchId: string;
    clientId: string;
    role: string;
    roleCode: string;
    token: string;
    uniqueNumber: string;
    tellerId: string;
    uname: string;
    depno: string;
    trustKey: string;
    cjToken: string;
    expireTime: string;
    cjTokenExpireTime: string;
}