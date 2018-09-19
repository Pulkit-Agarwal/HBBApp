import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptopupComponent } from './emptopup.component';

describe('EmptopupComponent', () => {
  let component: EmptopupComponent;
  let fixture: ComponentFixture<EmptopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
