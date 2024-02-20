import { Component,Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsComponent } from '../forms/forms.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsComponent,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  //@Input('Inputcars')
  cars:string[] = [];

  carData(carsData:string[]){
    this.cars=carsData;
  }
}
