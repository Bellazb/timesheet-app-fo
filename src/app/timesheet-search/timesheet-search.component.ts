import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
import { TimesheetModalComponent } from '../timesheet-modal/timesheet-modal.component';

@Component({
  selector: 'app-timesheet-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './timesheet-search.component.html',
  styleUrl: './timesheet-search.component.css'
})
export class TimesheetSearchComponent {
  taskName: string = '';

  // constructor( public dialog: MatDialog) {

  // }

  searchTimesheet(): void {

  }

  openCreateDialog(): void {
    // const dialogRef = this.dialog.open(TimesheetModalComponent, {
    //   width: '400px',
    // });

  }
}
