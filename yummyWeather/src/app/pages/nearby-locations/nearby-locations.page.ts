import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-nearby-locations',
  templateUrl: './nearby-locations.page.html',
  styleUrls: ['./nearby-locations.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NearbyLocationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
