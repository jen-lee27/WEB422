import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  searchVal: string = "";
  cities = ["Toronto", "Ajax", "Whitby", "Markham", "Ottawa", "Richmond", "Brampton", "Oshawa"];
  subArr: string[] = this.cities;

  searchFor() {
    this.subArr = this.cities.filter((city) => city.toUpperCase().includes(this.searchVal.toUpperCase()));
    console.log(this.subArr);
  }
}