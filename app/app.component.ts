import { Component, OnInit } from '@angular/core';
import { CARS_ARRAY } from './constants/s';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public carsArray;
  public ngOnInit() {
    setTimeout(() => {
      this.getCars()
    }, 2500);
  }
  public getCars = () => {
  this.carsArray = _.cloneDeep(CARS_ARRAY)
};
  public sortCars = (sortValue: string) => {
    this.carsArray = _.sortBy(this.carsArray, [sortValue]);
  };
  public filtersCars = (filterValue: string) => {
    this.getCars();
    switch (filterValue) {
      case 'Нові':
        this.carsArray = _.filter(this.carsArray, (car1) => {
          return car1.year > 2012;
        });
        break;
      case 'Старі':
        this.carsArray = _.filter(this.carsArray, (car2) => {
          return car2.year <= 2012;
        });
        break;
      case 'Дорогі':
        this.carsArray = _.filter(this.carsArray, (car3) => {
          return car3.price >= 100000;
      });
        break;
      case 'Німецькі':
        this.carsArray = _.filter(this.carsArray, { country: 'Німеччина' });
        break;
      case 'Італійські':
        this.carsArray = _.filter(this.carsArray, { country: 'Італія' });
        break;
      case 'Французькі':
        this.carsArray = _.filter(this.carsArray, { country: 'Франція' });
        break;
      case 'Українські':
        this.carsArray = _.filter(this.carsArray, {country: 'Україна' });
        break;
      case 'Японські':
        this.carsArray = _.filter(this.carsArray, { country: 'Японія' });
        break;
        default:
        this.getCars();
    }
  }
}




































