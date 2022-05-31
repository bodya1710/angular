import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarsService} from "../../services";
import {ICar} from "../../interfaces";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails: ICar;
  formUpdateCar: FormGroup;

  constructor(private activatedRout: ActivatedRoute,
              private carsService: CarsService,
              private router: Router) {
    this._createFormUpdate();
  }

  _createFormUpdate(): void {
    this.formUpdateCar = new FormGroup({
      model: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(({id}) => {
      this.carsService.getById(id).subscribe(value => this.carDetails = value);
    })
  }

  deletCar() {
    this.activatedRout.params.subscribe(({id}) => {
      this.carsService.deleteById(id);
      this.router.navigate(['cars']);
    })
  }

  upDate() {
    this.activatedRout.params.subscribe(({id}) => {
      this.carsService.updateById(id, this.formUpdateCar.getRawValue()).subscribe(value =>
        this.carDetails = value)
    })
  }
}
