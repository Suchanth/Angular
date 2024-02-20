import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    FormsModule,
    //ListComponent,
  ],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  @Output() carAdded: EventEmitter<string[]> = new EventEmitter();
  cars: string[] = [];
  carName = '';
  addCar() {
    this.cars.push(this.carName);
    this.carName = '';
    console.log(this.cars);
    this.carAdded.emit(this.cars);
  }
}
