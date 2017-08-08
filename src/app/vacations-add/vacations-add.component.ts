import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-vacations-add',
  templateUrl: './vacations-add.component.html',
  styleUrls: ['./vacations-add.component.css']
})
export class VacationsAddComponent implements OnInit {

  date: DateModel;
  options: DatePickerOptions;

  constructor() {
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
    this.options = new DatePickerOptions(this.options);
  }

}
