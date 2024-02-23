import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { SlicePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    SlicePipe,
    CurrencyPipe,
    PercentPipe,
    DecimalPipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  //toDate = new Date();
  // message="Welcome to Learning the Angular";
  // price = 12500;
  // a:number=0.3256;
  // b:number=0.34567;
  //pi = 3.14159265359;
  amount=12500;
}
