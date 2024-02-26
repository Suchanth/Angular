import { Component,OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-emp-data',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './emp-data.component.html',
  styleUrl: './emp-data.component.css',
  providers:[RecordsService]
})
export class EmpDataComponent implements OnInit {
   infoReceived1:string[]=[];
   infoReceived2:string[]=[];
   infoReceived3:string[]=[];

   getInfoFromService1(){
    this.infoReceived1=this.rservice.getInfo1();
   }
   getInfoFromService2(){
    this.infoReceived2=this.rservice.getInfo2();
   }
   getInfoFromService3(){
    this.infoReceived3=this.rservice.getInfo3();
   }

   constructor(private rservice:RecordsService){}
   ngOnInit(): void {
     
   }
}
