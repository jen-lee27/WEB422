import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent {
  @Input() title: string = "";
  @Input() desc: string = "";
  @Input() cardClass: string = "";
  @Input() buttonClass: string = "";
  @Input() link: string = "";
}
