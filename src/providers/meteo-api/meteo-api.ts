import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Day from '../../interfaces/Day';
import City from '../../interfaces/City';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the MeteoApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeteoApiProvider {
  private baseUrl: string = "../../assets/api/meteo.json";
 
  constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform
  ) {
    console.log("Hello MeteoApiProvider Provider");
    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.baseUrl = "/android_asset/www/assets/api/meteo.json";
    }
  }
  
 
  getDatas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
