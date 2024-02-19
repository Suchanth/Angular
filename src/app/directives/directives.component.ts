import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSwitch } from '@angular/common';
import { NgSwitchCase } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    FormsModule,
    NgSwitch,
    NgSwitchCase,
    NgIf,
    NgFor,
    NgClass,
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
//   title = 'List of Movies';
//   movies = [
//     {title:'Asuran',Director:'Vetrimaran',Cast:'Dhanush,Manju Warrier',ReleaseDate:'20th July 2000'},
//     {title:'Leo',Director:'Lokesh Kanagaraj',Cast:'Thalapathy Vijay,Trisha',ReleaseDate:'19th Oct 2023'},
//     {title:'Bigil',Director:'Atlee',Cast:'Thalapathy Vijay,Nayanthara',ReleaseDate:'20th Oct 2020'},
//     {title:'Petta',Director:'Karthik Subburaj',Cast:'Rajinikanth,Trisha',ReleaseDate:'11th Jan 2014'}
//   ]
  //num = 0;
  //ShowMe=true;
   enableRed=true;
   enableBig=true;
   enableItallic=true;
}
