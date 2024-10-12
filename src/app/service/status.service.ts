import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../model/timesheet.model'; // adjust path as necessary

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private apiUrl = 'http://localhost:8080/status'; // adjust API URL as needed

  constructor(private http: HttpClient) {}

  // Get all status
  getStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(`${this.apiUrl}/all`);
  }
}
