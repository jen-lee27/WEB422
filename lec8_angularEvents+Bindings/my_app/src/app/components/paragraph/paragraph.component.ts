import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent {

    @Input() textt: string = "Default Text";
    @Input() i: number = 0;

    updateTextt() {
      this.textt = "Text is updated!";
    }
    increment() {
      this.i = this.i + 1;
      console.log(this.i);
    }
}
