import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-nearby-locations-details',
  templateUrl: './nearby-locations-details.page.html',
  styleUrls: ['./nearby-locations-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NearbyLocationsDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
