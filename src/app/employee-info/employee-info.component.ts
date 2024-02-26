import { Component, } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor} from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-info',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
  ],
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.css',
  providers:[DataService]
})
export class EmployeeInfoComponent implements OnInit {
  infoReceived1:string[]=[];
  infoReceived2:string[]=[];
  infoReceived3:string[]=[];

  getInfoFromService1(){
    this.infoReceived1=this.dservice.getInfo1()
  }
  getInfoFromService2(){
    this.infoReceived2=this.dservice.getInfo2()
  }
  getInfoFromService3(){
    this.infoReceived3=this.dservice.getInfo3()
  }
  constructor(private dservice:DataService){ }

  ngOnInit(): void {
    
  }
  updateInfo(form : any){
    this.dservice.addInfo(form.value.location)
  }
}
