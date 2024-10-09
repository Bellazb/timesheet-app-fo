import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetSearchComponent } from './timesheet-search.component';

describe('TimesheetSearchComponent', () => {
  let component: TimesheetSearchComponent;
  let fixture: ComponentFixture<TimesheetSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesheetSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
