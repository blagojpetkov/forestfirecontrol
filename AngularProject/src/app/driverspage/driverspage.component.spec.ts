import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverspageComponent } from './driverspage.component';

describe('DriverspageComponent', () => {
  let component: DriverspageComponent;
  let fixture: ComponentFixture<DriverspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
