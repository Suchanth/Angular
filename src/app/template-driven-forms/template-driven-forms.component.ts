import { Component,OnInit} from '@angular/core';
import { NgClass } from '@angular/common';
import { NgFor,NgIf } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgControl } from '@angular/forms';



@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    NgIf,
  ],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent implements OnInit {
  countryList:Country[]=[
    new Country('1','India'),
    new Country('2','England'),
    new Country('3','USA'),
  ];
  contact!:Contact
    ngOnInit(): void {
    this.contact = {
      firstname:"Suresh",
      lastname:"Raina",
      email:"sureshraina@gmail.com",
      gender:"male",
      isSingle:true,
      country:"1",
      address:{city:"Maharashtra",street:"Wankhede Stadium",pincode:"636001"}
    }
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }
}
class Country{
  id:string;
  name:string;
  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
  class Contact {
    firstname!:string;
    lastname!:string;
    email!:string;
    gender!:string;
    isSingle!:boolean;
    country!:string;
    address!: {
      city:string;
      street:string;
      pincode:string;
    }

  }

