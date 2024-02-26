import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { BoxComponent } from './box/box.component';
import { FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UsersListsComponent } from './users-lists/users-lists.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmpDataComponent } from './emp-data/emp-data.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //LoginComponent,
    //SignupComponent,
    //DataBindingComponent,
    //DirectivesComponent,
    //PipesComponent,
    //FormsComponent,
    //ListComponent,,
    // BoxComponent,
    FormsModule,
    //ReactiveFormsModule,
    //NgIf,
   //TemplateDrivenFormsComponent,
   //ReactiveFormsComponent,
  //  UsersListsComponent,
  //  HttpClientModule,
  //EmployeeInfoComponent,
    EmpDataComponent,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practices';
  titles:string[] = [];
  disabledHeader=false;
  addTitle(){
    this.titles.push(this.title);
    console.log(this.titles)
  }

}
