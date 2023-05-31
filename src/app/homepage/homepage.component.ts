import { Component, OnDestroy, OnInit } from '@angular/core';
import { Car } from './car.model';
import { CarsService } from './car.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  cars: Car[] = [];
  filteredCars: Car[] = [];
  subscription: Subscription;

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.filteredCars = this.carsService.getCars();
    this.subscription = this.carsService.filteredCars$.subscribe(
      (filteredCars) => {
        this.filteredCars = filteredCars;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
