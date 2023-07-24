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
export class WeatherPage {
  todayDate = new Date();
  cityName = '';
  weatherTemperature: any;
  weatherDetails: any;
  icon: any;
  name = '';
  loading = true;

  constructor(public httpClient: HttpClient) { 
    // this.loadData();
  }

  loadData() {
    this.httpClient.get(`${API_URL}weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      this.weatherTemperature = results['main'];
      this.name = results['name'];
      console.log(this.weatherTemperature);
      this.weatherDetails = results['weather'][0];
      console.log(this.weatherDetails);
      this.icon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@2x.png`;
      this.loading = false;
    });
  }

  loader() {

  }

}
