import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimesheetService } from '../service/timesheet.service';
import { UserService } from '../service/user.service'; // Assuming you have a UserService
import { StatusService } from '../service/status.service'; // Assuming you have a StatusService
import { User, Status, Timesheet } from '../model/timesheet.model'; // Adjust the path as necessary

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  isOpen = false;

  // Fields for creating a new timesheet
  project = '';
  task = '';
  startDate = '';
  endDate = '';
  selectedStatus!: Status;  // Store selected Status object
  selectedUser!: User;  // Store selected User object

  users: User[] = [];  // List of users from the API
  statuses: Status[] = [];  // List of statuses from the API

  private timesheetService = inject(TimesheetService);
  private userService = inject(UserService);
  private statusService = inject(StatusService);

  ngOnInit() {
    // Load users and statuses when the component is initialized
    this.loadUsers();
    this.loadStatuses();
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  // Fetch users from the API
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

  // Fetch statuses from the API
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
    // Ensure both id and name are provided
    const newTask: Timesheet = {
      project: this.project,
      task: this.task,
      startDate: this.startDate,
      endDate: this.endDate,
      status: this.selectedStatus,  // Provide full Status object with id and name
      user: this.selectedUser  // Provide full User object with id and name
    };

    console.log('New Task:', newTask);

    // Call the service to create the timesheet
    this.timesheetService.createTimesheet(newTask).subscribe({
      next: (response) => {
        console.log('Timesheet saved successfully:', response);
        this.close();
      },
      error: (error) => {
        console.error('Error saving timesheet:', error);
      }
    });
  }
}
