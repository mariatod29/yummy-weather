import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NearbyLocationsPage } from './nearby-locations.page';

describe('NearbyLocationsPage', () => {
  let component: NearbyLocationsPage;
  let fixture: ComponentFixture<NearbyLocationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NearbyLocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
