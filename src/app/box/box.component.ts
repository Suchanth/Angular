import { Component,Input,OnChanges,OnInit,SimpleChanges,DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent implements OnChanges,OnInit,DoCheck,OnDestroy{
  @Input() text:string[]=[]
  noofTitles=0;
  ngOnInit(): void {
    console.log("ngOnInit Called!")
    this.text.push("First Title");
    this.noofTitles=1;
  }
  ngOnChanges(changes: SimpleChanges): void {
    //if(!changes['text'].isFirstChange()){
     console.log("ngOnchanges Called!")
      //console.log("You are modified the original value")
    }
  //}
  ngDoCheck(): void {
    if(this.text.length > this.noofTitles){
    console.log("ngDoCheck is Called!");
    console.log("You are modified the original value");
    this.noofTitles++;
    }
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy is called");
  }
  
}
