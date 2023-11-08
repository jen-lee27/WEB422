import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // cities: string[] = ["London", "Tokyo", "Ottawa", "Toronto"];

  // populateList() {
  //   this.cities = ["New York", "Beijing", "Ajax", "Whitby", "Markham"];
  // }

  @Input() cities: string[] = [];

  @Input() textColor: string = "";

  setStyle() {
    this.textColor = "red";
  }
}
