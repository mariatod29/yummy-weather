import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const baseUrl = environment.baseUrl;
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
    this.httpClient.get(`${baseUrl}weather?q=${this.cityName}&appid=${apiKey}`).subscribe(results => {
      this.weatherTemperature = results['main'];
      this.name = results['name'];
      this.weatherDetails = results['weather'][0];
      this.icon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@2x.png`;
      this.loading = false;
    });
  }

  loader() {

  }

}
