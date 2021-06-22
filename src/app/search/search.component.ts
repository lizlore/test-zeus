import { Component, DoCheck, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements DoCheck {
  @Output() valueToSearch: EventEmitter<any>;

  value = '';

  constructor() {
    this.valueToSearch = new EventEmitter();
  }
  
  ngDoCheck(): void {
    this.valueToSearch.emit(this.value);
  }
}
