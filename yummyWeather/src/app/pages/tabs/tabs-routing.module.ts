import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'places',
        loadChildren: () => import('../places/places.module').then(m => m.PlacesPageModule)
      },
      {
        path: 'weather',
        loadChildren: () => import('../weather/weather.module').then(m => m.WeatherPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/places',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/places',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
