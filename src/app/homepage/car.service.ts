import { Injectable } from '@angular/core';
import { Car } from '../homepage/car.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarsService {
  cars: Car[] = [
    new Car(
      'https://i.ytimg.com/vi/Qg_Q0cFAHcQ/maxresdefault.jpg',
      'Lamborghini Urus',
      'sports',
      2023,
      0,
      2,
      20000000,
      'Dubai',
      'Lamborghini',
      2023,
      'Petrol',
      'Left',
      2,
      'Black',
      'Applied',
      'Red',
      'Flawless',
      'Flawless',
      8,
      'Manual',
      6000
    ),
    new Car(
      'https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U557/IMG_80802-large.jpg',
      'Poeche Spider 911',
      'sports',
      2023,
      0,
      2,
      20000000,
      'Dubai',
      'Porche',
      2023,
      'Petrol',
      'Left',
      2,
      'Black',
      'Applied',
      'Red',
      'Flawless',
      'Flawless',
      8,
      'Manual',
      6000
    ),
  ];

  filteredCarsSubject: Subject<Car[]> = new Subject<Car[]>();
  filteredCars$ = this.filteredCarsSubject.asObservable();

  getCars() {
    return this.cars.slice();
  }

  updateFilteredCars(filteredCars: Car[]) {
    this.filteredCarsSubject.next(filteredCars);
  }
}
