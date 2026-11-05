import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidemenuList {
    constructor() {}
}

export interface MENULIST {
    idx: string;
    name: string;
    icon: string;
    link: string;
    active: boolean;
    open: number;
    show: boolean;
}