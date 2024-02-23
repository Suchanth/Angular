import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  contactForm=new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(10)]),
    lastname:new FormControl({
      value:"Kumar",
      disabled:false,
    },[Validators.required,Validators.maxLength(15),Validators.pattern("^[a-zA-z]+$")]),
    email:new FormControl("",[Validators.required]),
    gender:new FormControl("",[Validators.required]),
    isSingle:new FormControl("",[Validators.requiredTrue]),
    country:new FormControl("",[Validators.required]),
    address: new FormGroup({
      city:new FormControl("",[Validators.required]),
      street:new FormControl("",[Validators.required]),
      pincode:new FormControl("",[Validators.required]),
    })
  })
  get firstname(){
    return this.contactForm.get('firstname');
  }
  get lastname(){
    return this.contactForm.get('lastname');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get gender(){
    return this.contactForm.get('gender');
  }
  get isSingle(){
    return this.contactForm.get('isSingle');
  }
  get country(){
    return this.contactForm.get('country');
  }
  get city(){
    return this.contactForm.get('address')?.get('city');
  }
  get street(){
    return this.contactForm.get('address')?.get('street');
  }
  get pincode(){
    return this.contactForm.get('address')?.get('pincode');
  }

  OnSubmit(){
    console.log(this.contactForm.value);
  }
}
