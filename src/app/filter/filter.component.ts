import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarsService } from '../homepage/car.service';
import { Car } from '../homepage/car.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  cars: Car[] = [];
  filteredCars: Car[] = [];
  cityOptions = [];
  priceOptions = [];
  makerOptions = [];
  fuelTypeOptions = [];
  bodyTypeOptions = [];
  stearingSideOptions = [];
  seatsOptions = [];
  colorOptions = [];
  interiorColorOptions = [];
  cylindersOptions = [];
  horsePowerOptions = [];
  carFilterForm: FormGroup;

  constructor(
    private carsService: CarsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.carFilterForm = this.formBuilder.group({
      city: [''],
      price: [''],
      maker: [''],
      fuelType: [''],
      bodyType: [''],
      stearingSide: [''],
      seats: [''],
      color: [''],
      interiorColor: [''],
      cylinders: [''],
      horsePower: [''],
    });
    this.cars = this.carsService.getCars();
    this.filteredCars = this.cars;

    this.cityOptions = this.cars.map((car) => {
      return car.city;
    });

    this.priceOptions = this.cars.map((car) => {
      return car.price;
    });

    this.makerOptions = this.cars.map((car) => {
      return car.maker;
    });

    this.fuelTypeOptions = this.cars.map((car) => {
      return car.fuelType;
    });

    this.bodyTypeOptions = this.cars.map((car) => {
      return car.bodyType;
    });

    this.stearingSideOptions = this.cars.map((car) => {
      return car.stearingSide;
    });

    this.seatsOptions = this.cars.map((car) => {
      return car.seats;
    });

    this.colorOptions = this.cars.map((car) => {
      return car.color;
    });

    this.interiorColorOptions = this.cars.map((car) => {
      return car.interiorColor;
    });

    this.cylindersOptions = this.cars.map((car) => {
      return car.cylinders;
    });

    this.horsePowerOptions = this.cars.map((car) => {
      return car.horsePower;
    });
  }

  applyFilters() {
    const formValues = this.carFilterForm.getRawValue();

    this.filteredCars = this.cars.filter((car) => {
      return (
        (formValues.city === '' || car.city === formValues.city) &&
        (formValues.price === '' || car.price === formValues.price) &&
        (formValues.maker === '' || car.maker === formValues.maker) &&
        (formValues.fuelType === '' || car.fuelType === formValues.fuelType) &&
        (formValues.bodyType === '' || car.bodyType === formValues.bodyType) &&
        (formValues.stearingSide === '' ||
          car.stearingSide === formValues.stearingSide) &&
        (formValues.seats === '' || car.seats === formValues.seats) &&
        (formValues.color === '' || car.color === formValues.color) &&
        (formValues.interiorColor === '' ||
          car.interiorColor === formValues.interiorColor) &&
        (formValues.cylinders === '' ||
          car.cylinders === formValues.cylinders) &&
        (formValues.horsePower === '' ||
          car.horsePower === formValues.horsePower)
      );
    });
    this.carsService.updateFilteredCars(this.filteredCars);
    console.log('filtered cars', this.filteredCars);
  }
}
