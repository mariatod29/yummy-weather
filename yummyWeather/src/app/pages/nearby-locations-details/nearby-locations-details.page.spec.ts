import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NearbyLocationsDetailsPage } from './nearby-locations-details.page';

describe('NearbyLocationsDetailsPage', () => {
  let component: NearbyLocationsDetailsPage;
  let fixture: ComponentFixture<NearbyLocationsDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NearbyLocationsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
