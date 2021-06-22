import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { env } from './../fixtures/environments/environments.fixture';

@Injectable({
  providedIn: 'root',
})
export class EmployesService {
  private employes = [];
  public error: boolean = false;
  public subjectEmployes = new ReplaySubject(0);

  constructor(private http: HttpClient) {}

  private fetchEmployes() {
    return this.http.get(`${env.usersApiUrl}`);
  }

  getEmployes() {
    this.fetchEmployes().subscribe((response) => {
      this.subjectEmployes.next(response);
    });
    return this.subjectEmployes;
  }

  createEmploye(employe: any) {
    return this.http.post(`${env.baseUlr}${env.saveEmploye}`, employe);
  }
}
