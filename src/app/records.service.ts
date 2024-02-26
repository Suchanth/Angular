import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1:string[]=["Ramesh","E100","abc@gmail.com"]
  info2:string[]=["Suresh","E101","suresh@gmail.com"]
  info3:string[]=["Mahesh","E102","mahesh123@gmail.com"]

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }
  constructor() { }
}
