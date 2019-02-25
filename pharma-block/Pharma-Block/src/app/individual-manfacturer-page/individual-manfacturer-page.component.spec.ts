import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualManfacturerPageComponent } from './individual-manfacturer-page.component';

describe('IndividualManfacturerPageComponent', () => {
  let component: IndividualManfacturerPageComponent;
  let fixture: ComponentFixture<IndividualManfacturerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualManfacturerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualManfacturerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
