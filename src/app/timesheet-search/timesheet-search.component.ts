import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { TimesheetListComponent } from '../timesheet-list/timesheet-list.component';
import { Timesheet } from '../model/timesheet.model';

@Component({
  selector: 'app-timesheet-search',
  standalone: true,
  imports: [FormsModule, ModalComponent, TimesheetListComponent, CommonModule],
  templateUrl: './timesheet-search.component.html',
  styleUrls: ['./timesheet-search.component.css']
})
export class TimesheetSearchComponent implements AfterViewInit {
  taskName: string = '';

  @ViewChild('modal', { static: false }) modal!: ModalComponent;
  @ViewChild('timesheetList', { static: false }) timesheetList!: TimesheetListComponent; // Use the template reference variable

  ngAfterViewInit(): void {
    if (this.timesheetList) {
      console.log('TimesheetListComponent is available:', this.timesheetList);
    } else {
      console.error('TimesheetListComponent is still not defined.');
    }
  }
  
  openCreateDialog(): void {
    if (this.modal) {
      this.modal.open();
    } else {
      console.error('ModalComponent is not defined.');
    }
  }

  searchTimesheet(): void {
    if (this.timesheetList) {
      this.timesheetList.fetchTimesheetEntries();
    } else {
      console.error('TimesheetListComponent is not available');
    }
  }
}
