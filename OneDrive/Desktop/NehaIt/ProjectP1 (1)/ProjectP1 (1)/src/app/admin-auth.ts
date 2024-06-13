export interface AdminAuth{
    username:string;
    email:string;
    password:string
}

export interface project{
    projectId: number;
    projectName: String;
    projectDescription: String;
    clientName: String;
    clientInfo: String;
    assignDate: Date;
    dueDate: Date;
}

export interface task{
   
    projectId: number;
      taskId: number;
      taskName: string;
      assignTo: string;
      dueDate: Date;
      status: string;
      priority:string;

}

