import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { task } from './admin-auth';
import { Task } from './project';
// import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8080/tasks'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getData(): Observable<task[]> {
    return this.http.get<task[]>(this.apiUrl);
  }
getTasks(projectId: number):Observable<Task[]>{
  return this.http.get<Task[]>(`${this.apiUrl}/task/${projectId}`)
  
}
createTask(task: Task): Observable<Task> {
  // You may need to adjust the API endpoint based on your backend implementation
  console.log("task is"+task);
  return this.http.post<Task>(`${this.apiUrl}`, task);
}
updateTask(task: Task): Observable<Task> {
  return this.http.put<Task>(`${this.apiUrl}/${task.id}`,task);
}
addTask(task:Task){
  return this.http.post<Task>(`${this.apiUrl}`,task);

}
}