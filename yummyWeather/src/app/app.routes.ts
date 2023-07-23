import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'nearby-locations',
    pathMatch: 'full',
  },
  {
    path: 'nearby-locations',
    loadComponent: () => import('./pages/nearby-locations/nearby-locations.page').then( m => m.NearbyLocationsPage)
  },
  {
    path: 'nearby-locations/:id',
    loadComponent: () => import('./pages/nearby-locations-details/nearby-locations-details.page').then( m => m.NearbyLocationsDetailsPage)
  },
  {
    path: 'weather-forecast',
    loadComponent: () => import('./pages/weather-forecast/weather-forecast.page').then( m => m.WeatherForecastPage)
  },
];
