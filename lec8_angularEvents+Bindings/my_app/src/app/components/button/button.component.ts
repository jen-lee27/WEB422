import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() textChangedd = new EventEmitter();
  
  //example3
  @Output() populateListEvent = new EventEmitter();

  //example4
  @Input() text: string = "";
  @Output() styleListEvent = new EventEmitter();

  onClickk() {
    console.log("button clicked!");
    this.textChangedd.emit(); //shout-out!!!
    this.populateListEvent.emit();
    this.styleListEvent.emit();
  }
}
