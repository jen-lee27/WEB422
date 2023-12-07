import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchVal: string = "";
  @Output() searchEvent = new EventEmitter();

  onSearch() {
    this.searchEvent.emit(this.searchVal);
  }
}
