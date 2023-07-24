import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsDetailsPage } from './locations-details.page';

const routes: Routes = [
  {
    path: '',
    component: LocationsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsDetailsPageRoutingModule {}
