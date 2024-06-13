import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectManager } from '../ProjectManager'; // Assuming you have a ProjectManager interface or class

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  private baseUrl = 'http://localhost:8080/project-managers'; // Base URL of your backend API

  constructor(private http: HttpClient) { }

  createProjectManager(projectManager: ProjectManager): Observable<ProjectManager> {
    return this.http.post<ProjectManager>(`${this.baseUrl}/create-project-manager`, projectManager);
  }

  // getProjectManager(projectManager:ProjectManager):Observable<ProjectManager>{
  //   return this.http.get<ProjectManager>(`${this.baseUrl}/getAllProjectManagers`, projectManager)
  // }

  getAllProjectManagers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllProjectManagers`);
  }
}
