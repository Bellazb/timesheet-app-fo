import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timesheet-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timesheet-list.component.html',
  styleUrl: './timesheet-list.component.css'
})
export class TimesheetListComponent {
  timesheetEntries = [
    {project: 'Timesheet Application', task: 'Create HTML Layout', assignedTo: 'Johan Arif', fromDate: '10-01-2023', toDate: '12-01-2024', status: 'Closed'},
  ];

  editEntry(entry: any) {

  }

  deleteEntry(entry: any) {
    
  }

}
