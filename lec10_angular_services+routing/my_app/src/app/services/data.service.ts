import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cities: string[] = ["Toronto", "Ottawa", "Ajax", "Whitby"];
  constructor() { }

  getCities(): string[] {
    return this.cities;
  }

  addItem(item: string) {
    this.cities.push(item);
  }
  removeItem() { //remove the last item from the list
    this.cities.splice(this.cities.length-1, 1);
  }
}
