import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationsDetailsPage } from './locations-details.page';

describe('LocationsDetailsPage', () => {
  let component: LocationsDetailsPage;
  let fixture: ComponentFixture<LocationsDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocationsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
