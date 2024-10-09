import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetModalComponent } from './timesheet-modal.component';

describe('TimesheetModalComponent', () => {
  let component: TimesheetModalComponent;
  let fixture: ComponentFixture<TimesheetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesheetModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
