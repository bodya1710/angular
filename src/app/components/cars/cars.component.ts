import {Component, OnInit} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarsService} from "../../services";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  form: FormGroup;
  cars: ICar[];


  constructor(private carsService: CarsService) {
    this._createFormCar();
  }

  _createFormCar(): void {
    this.form = new FormGroup({
      model: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null)
    })
  }


  ngOnInit(): void {
    this.carsService.getAll().subscribe(value => this.cars = value);
  }

  sendCars(): void {
    this.carsService.create(this.form.getRawValue()).subscribe(value =>
      this.cars.push(value)
    )
  }
}
