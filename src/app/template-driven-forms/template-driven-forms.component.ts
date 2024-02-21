import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
  
  ],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {
  countryList:Country[]=[
    new Country('1','India'),
    new Country('2','England'),
    new Country('3','USA'),
  ];
  Submit(form:NgForm){
    console.log(form.value)
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
