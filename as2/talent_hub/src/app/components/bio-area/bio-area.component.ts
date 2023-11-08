import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bio-area',
  templateUrl: './bio-area.component.html',
  styleUrls: ['./bio-area.component.css']
})
export class BioAreaComponent {
  @Input() bioText: string = "";
  @Input() name: string = "";
  @Input() job: string = "";
  @Input() dispValue: string = "none";

  updateBio(bio:any, name:any, job:any) {
    if(this.name === name) {
      this.dispValue = "none";
    }
    else {
      this.bioText = bio;
      this.name = name;
      this.job = job;
      this.dispValue = "block";
    }
  }
}
