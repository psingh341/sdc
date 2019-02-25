import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPAgeComponent } from './login-page.component';

describe('LoginPAgeComponent', () => {
  let component: LoginPAgeComponent;
  let fixture: ComponentFixture<LoginPAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
