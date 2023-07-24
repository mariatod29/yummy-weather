import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherTemperature: any;
  todayDate = new Date();
  cityName: any;
  weatherIcon: any;
  weatherDetails: any;

  constructor(public httpClient: HttpClient) { 
    this.loadData();
  }

  loadData() {
    this.httpClient.get(`${API_URL}weather?q=${'Magdeburg'}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      this.weatherTemperature = results['main'];
      this.cityName = results['name'];
      this.weatherDetails = results['weather'][0];
      console.log(this.weatherDetails);
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@2x.png`;
    });
  }
  ngOnInit() {
  }

}
