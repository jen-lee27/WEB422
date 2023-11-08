import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_app';

  citiesArr: string[] = ["City1", "City2", "City3"];
  populateList() {
    this.citiesArr = ["New York", "Beijing", "Ajax", "Whitby", "Markham"];
  }
}
