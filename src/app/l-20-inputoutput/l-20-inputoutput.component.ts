import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-l-20-inputoutput',
  imports: [],
  templateUrl: './l-20-inputoutput.component.html',
  styleUrl: './l-20-inputoutput.component.css'
})
export class L20InputOutputComponent {
@Input()
caption :string=" Mohammad Zaman "; 
@Output()
onCaptionClick: EventEmitter<any> = new EventEmitter();
handleCaptionClickEvent(){
  this.onCaptionClick.emit(this.caption);
}
}
  