import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name="Ramesh"; 
  title="Learning from Angular in YouTube";
  color="red";
  isDisabled = false;

  getTitle(){
    return this.title;
  }
  getMax(first:number,second:number){
    return Math.max(first,second);
  }
  clickCount = 0;
  clickMe(){
    this.clickCount++;
  }
  value= " ";
  value1='';
  handleInput(event:any){
      this.value=(event.target as HTMLInputElement).value;
  }
  }

