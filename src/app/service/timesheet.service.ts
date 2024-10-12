import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Timesheet } from '../model/timesheet.model';

@Injectable({
  providedIn: 'root' // This allows the service to be injected globally
})
export class TimesheetService {
  private apiUrl = 'http://localhost:8080/timesheets'; // Your API URL

  constructor(private http: HttpClient) {}

  // Method to get all timesheets
  getTimesheets(): Observable<Timesheet[]> {
    return this.http.get<Timesheet[]>(`${this.apiUrl}/all`);
  }

  // Method to create a new timesheet
  createTimesheet(timesheet: Timesheet): Observable<Timesheet> {
    return this.http.post<Timesheet>(`${this.apiUrl}/create`, timesheet);
  }

  // Method to delete a timesheet by ID
  deleteTimesheet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
