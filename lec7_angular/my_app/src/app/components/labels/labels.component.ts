import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent {
  @Input() texttt : string = ""; //by default it'll be an empty value
  @Input() colorrr : string = "";
}
