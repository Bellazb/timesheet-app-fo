import { Component, OnInit } from '@angular/core';
import { TimesheetService } from '../service/timesheet.service';
import { Timesheet } from '../model/timesheet.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-timesheet-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.css']
})
export class TimesheetListComponent implements OnInit {
  timesheetEntries: Timesheet[] = [];

  constructor(private timesheetService: TimesheetService) {}

  ngOnInit(): void {
    // this.fetchTimesheetEntries(); // Fetch entries when the component initializes
  }

  fetchTimesheetEntries(): void {
    this.timesheetService.getTimesheets().subscribe(
      (data: Timesheet[]) => {
        console.log('Fetched timesheet entries:', data);
        this.timesheetEntries = data;
      },
      (error: any) => {
        console.error('Error fetching timesheet entries', error);
      }
    );
  }

  editEntry(entry: Timesheet): void {
    // Your logic for editing the entry
  }

  deleteEntry(entry: Timesheet): void {
    const id = entry.id; // Get the ID of the timesheet to be deleted
    if (id !== undefined) { // Check if id is not undefined
      this.timesheetService.deleteTimesheet(id).subscribe(
        () => {
          this.timesheetEntries = this.timesheetEntries.filter(t => t.id !== id);
          console.log(`Deleted timesheet with id ${id}`);
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
