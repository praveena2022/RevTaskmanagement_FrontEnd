// src/app/project.ts
export interface TeamMember {
    id: number;
    email: string;
    role: string;
  }
  
  export interface Task {
    id?: number; // Optional, as it will be assigned by the backend
    title: string;
    description: string;
    status: string; // 'assigned', 'inprogress', or 'completed'
    priority: string; // 'high', 'medium', or 'low'
    assignDate?: Date; 
    dueDate: Date;
    assignedTo?:string,
    assignTo:number,
   // assignToEmail?: string;

  }
  
  export interface ProjectP {
    id: number;
    name: string;
    description: string;
    clientId: number;
    clientName?:string,
    
    assignedDate: Date;
    dueDate: Date;
    teamMembers?: TeamMember[];
    tasks?: Task[];
  }
  export interface client{
    id:number;
    name:string;
    email:string;
    projects:ProjectP;
  }
  
