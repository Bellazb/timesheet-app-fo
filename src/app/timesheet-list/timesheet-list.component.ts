import { Component, OnInit, ViewChild } from '@angular/core';
import { TimesheetService } from '../service/timesheet.service';
import { Timesheet } from '../model/timesheet.model';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timesheet-list',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit {
  timesheetEntries: Timesheet[] = [];

  @ViewChild('modal') modalComponent!: ModalComponent; // Reference the modal

  constructor(private timesheetService: TimesheetService) {}

  ngOnInit(): void {
    this.fetchTimesheetEntries();
  }

  fetchTimesheetEntries(): void {
    this.timesheetService.getTimesheets().subscribe(
      (data: Timesheet[]) => {
        this.timesheetEntries = data;
      },
      (error: any) => {
        console.error('Error fetching timesheet entries', error);
      }
    );
  }

  editEntry(entry: Timesheet): void {
    this.modalComponent.open(entry); // Should now correctly reference the modal
  }

  deleteEntry(entry: Timesheet): void {
    const id = entry.id;
    if (id !== undefined) {
      this.timesheetService.deleteTimesheet(id).subscribe(
        () => {
          this.timesheetEntries = this.timesheetEntries.filter(t => t.id !== id);
        },
        (error: any) => {
          console.error('Error deleting timesheet', error);
        }
      );
    } else {
      console.error('Timesheet entry has no ID');
    }
  }
}
