import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployesService } from './../services/employes.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.scss'],
})
export class EmployesComponent implements AfterViewInit {
  displayedColumns: Array<string>;
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  subscription: Subscription;
  data: Array<any> = [];
  results: Array<any> = [];
  empty: boolean = false;
  textSearch: string = '';

  constructor(private employesService: EmployesService) {
    this.displayedColumns = ['id', 'name', 'email', 'phone'];
    this.subscription = this.employesService
      .getEmployes()
      .subscribe((value: any) => {
        this.data = value;
        this.dataSource = this.data;
      });
  }

  search(value: string) {
    this.textSearch = value;
    let matchedArray = this.findMatch(value, this.dataSource);
    this.results = matchedArray;
    const type = String(matchedArray);
    if (!type) {
      this.empty = true;
    } else {
      this.empty = false;
    }
  }

  findMatch(wordToSearch: string, data: Array<any>) {
    return data.filter((item) => {
      const regex = new RegExp(wordToSearch, 'gi');
      return (
        item.name.match(regex) ||
        item.email.match(regex) ||
        item.phone.match(regex)
      );
    });
  }
}
