import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationsDetailsPageRoutingModule } from './locations-details-routing.module';

import { LocationsDetailsPage } from './locations-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationsDetailsPageRoutingModule
  ],
  declarations: [LocationsDetailsPage]
})
export class LocationsDetailsPageModule {}
