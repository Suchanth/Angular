import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-lists',
  standalone: true,
  imports: [
    NgFor,
  ReactiveFormsModule,
  ],
  templateUrl: './users-lists.component.html',
  styleUrl: './users-lists.component.css'
})
export class UsersListsComponent implements OnInit {
  users:User[]=[]
  userForm=new FormGroup(
    {
      name:new FormControl(""),
      email:new FormControl("")

  }
  )
  constructor(private http:HttpClient){

  }
  ngOnInit() {
    this.getUsers().subscribe((response)=>{
      this.users=response;
    })
  }

  getUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
  addUsers(){
    return this.http.post<User>("https://jsonplaceholder.typicode.com/users",{
      name:this.userForm.controls.name.value,
      email:this.userForm.controls.email.value
    })
  }
  OnSubmit(){
    this.addUsers().subscribe((response)=>{
      this.users.push(response);
    })
  }
}
class User{
  name!:string;
  email!:string;
}
