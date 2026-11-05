import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class EnvService {

    // API url
    public production: true  | undefined;;
    public currentEnv: 'LOCAL' | undefined;
    public apiUrl: 'http:88.8.196.94:9487'  | undefined;;
    public outboundUrl: 'https://diweb12/default1.asp'  | undefined;;
    public adminGetToken: 'cjToken'  | undefined;;
    public adminSendToken: 'trustKey'  | undefined;;

    public enableDebug: true  | undefined;;

  constructor() { }
}
