import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstdialogComponent } from './firstdialog.component';

describe('FirstdialogComponent', () => {
  let component: FirstdialogComponent;
  let fixture: ComponentFixture<FirstdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
