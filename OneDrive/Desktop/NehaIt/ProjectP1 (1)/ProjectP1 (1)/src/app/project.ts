// src/app/project.ts
export interface TeamMember {
    id: number;
    name: string;
    role: string;
  }
  //working
  // export interface Task {
  //   id: number;
  //   title: string;
  //   description: string;
  //   assignedTo: number;
  // }
  export interface Task {
    id: number; // Optional, as it will be assigned by the backend
    title: string;
    description: string;
    status: string; // 'assigned', 'inprogress', or 'completed'
    priority: string; // 'high', 'medium', or 'low'
    assignDate?: Date; // Optional, as it will be assigned by the backend
    dueDate: Date;
    assignedTo: String; // Assuming it's the ID of the assigned team member
    projectId: number; // ID of the project
  }
  
  export interface Project {
    id: number;
    name: string;
    description: string;
    clientName: string;
    dueDate: Date;
    assignedDate: Date;
    teamMembers: TeamMember[];
    tasks: Task[];
  }
  
