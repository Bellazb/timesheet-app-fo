import { Component, inject, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimesheetService } from '../service/timesheet.service';
import { UserService } from '../service/user.service';
import { StatusService } from '../service/status.service';
import { User, Status, Timesheet } from '../model/timesheet.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() timesheetEntry?: Timesheet;

  isOpen = false;

  // Fields for creating/editing a timesheet
  id?: number; // Add the id property
  project = '';
  task = '';
  startDate = '';
  endDate = '';
  selectedStatus!: Status;
  selectedUser!: User;

  users: User[] = [];
  statuses: Status[] = [];

  private timesheetService = inject(TimesheetService);
  private userService = inject(UserService);
  private statusService = inject(StatusService);

  ngOnInit() {
    this.loadUsers();
    this.loadStatuses();
  }

  open(entry?: Timesheet): void {
    this.isOpen = true;
  
    if (entry) {
      // Populate form fields with existing timesheet data
      this.id = entry.id;
      this.project = entry.project;
      this.task = entry.task;
      this.startDate = entry.startDate;
      this.endDate = entry.endDate;
      this.selectedStatus = entry.status;
      this.selectedUser = entry.user;
    } else {
      // Reset fields for creating a new timesheet entry
      this.id = undefined;
      this.project = '';
      this.task = '';
      this.startDate = '';
      this.endDate = '';
      this.selectedStatus = undefined!;
      this.selectedUser = undefined!;
    }
  }
  

  close() {
    this.isOpen = false;
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  loadStatuses() {
    this.statusService.getStatus().subscribe({
      next: (statuses) => {
        this.statuses = statuses;
      },
      error: (error) => {
        console.error('Error fetching statuses:', error);
      }
    });
  }

  saveTimesheet() {
    const timesheet: Timesheet = {
      id: this.id,
      project: this.project,
      task: this.task,
      startDate: this.startDate,
      endDate: this.endDate,
      status: this.selectedStatus,
      user: this.selectedUser,
    };
  
    if (timesheet.id) {
      this.timesheetService.updateTimesheet(timesheet).subscribe({
        next: (response) => {
          console.log('Timesheet updated successfully:', response);
          this.close();
        },
        error: (error) => {
          console.error('Error updating timesheet:', error);
        }
      });
    } else {
      this.timesheetService.createTimesheet(timesheet).subscribe({
        next: (response) => {
          console.log('Timesheet created successfully:', response);
          this.close();
        },
        error: (error) => {
          console.error('Error saving timesheet:', error);
        }
      });
    }
  }  
  
}
