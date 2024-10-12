export interface User {
    id: number;
    email: string;
    name: string;
  }
  
  export interface Status {
    id: number;
    name: string;
  }
  
  export interface Timesheet {
    id?: number;
    project: string;
    task: string;
    startDate: string;
    endDate: string;
    status: Status;  
    user: User;      
  }
  