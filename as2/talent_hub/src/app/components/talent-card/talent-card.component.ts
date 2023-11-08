import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-talent-card',
  templateUrl: './talent-card.component.html',
  styleUrls: ['./talent-card.component.css']
})
export class TalentCardComponent {
  @Input() image: string = "";
  @Input() name: string = "";
  @Input() job: string = "";
  @Input() rate: string = "";

  @Output() profileClick = new EventEmitter();

  onClick(e:Event) {
    e.preventDefault();
    this.profileClick.emit();
  }
}
