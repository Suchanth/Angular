import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1:string[]=['Suresh','E101','suresh@gmail.com']
  info2:string[]=['Ramesh','E102','ramesh@gmail.com']
  info3:string[]=["Ram Kumar","E103","ramkumar@gmail.com"]

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }
  addInfo(info:any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}
