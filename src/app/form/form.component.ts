import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployesService } from './../services/employes.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form: any;
  date: Date;
  maxdate: Date;
  datePipe = new DatePipe('en');

  constructor(
    private FormBuilder: FormBuilder,
    private employeService: EmployesService
  ) {
    this.date = new Date();
    this.maxdate = new Date(
      this.date.getFullYear() + 0,
      this.date.getMonth(),
      this.date.getDate()
    );
    this.buildForm();
  }

  save(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      this.form.value.birthday = this.datePipe.transform(
        this.form.value.birthday,
        'yyyy/MM/dd'
      );
      const employe = this.form.value;
      this.employeService.createEmploye(employe).subscribe((element) => {
        console.log(element);
      });
    }
  }

  buildForm() {
    this.form = this.FormBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
    });
  }
}
