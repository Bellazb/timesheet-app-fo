import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimesheetSearchComponent } from './timesheet-search/timesheet-search.component';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimesheetSearchComponent, TimesheetListComponent, MatDialogModule, BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'timesheet-app';
}
