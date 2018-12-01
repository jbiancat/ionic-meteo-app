import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import Day from '../../interfaces/Day';
import { MeteoApiProvider } from '../../providers/meteo-api/meteo-api';
import City from '../../interfaces/City';
import MeteoData from '../../interfaces/MeteoData';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  city: City;
  days: Day[] = [];
  day: Day;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private meteoApiProvider: MeteoApiProvider
  ) {}
 
  ionViewDidLoad() {
    this.meteoApiProvider.getDatas().subscribe((data: MeteoData) =>{
      this.city = data.city_info;
      this.days.push(data.fcst_day_0);
      this.days.push(data.fcst_day_1);
      this.days.push(data.fcst_day_2);
      this.days.push(data.fcst_day_3);
      this.days.push(data.fcst_day_4);

      console.log(data);
      this.day = this.days[0];
    })
  }

  dayChange(event){
    this.day = event;
    console.log(event);
  }
 

}
