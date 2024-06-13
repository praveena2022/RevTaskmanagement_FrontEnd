import { TeamMember } from "./project";

export interface User{
  taskId?: any;
  projectId:number;
      id: number,
      title: String
      assignedTo: String,
      assignDate: Date
      dueDate: Date
      priority: String
      status: String
      description:String
      
}

export interface Task {
  projectId: number;
  id: number;
  title: string;
  assignedTo: string;
  assignDate: Date;
  dueDate: Date;
  priority: string;
  status: string;
  description: string;
}


// "assignDate": "2024-06-02",
// "dueDate": "2024-06-11",
// "assignedTo": "tm2",
// "projectId": 2



