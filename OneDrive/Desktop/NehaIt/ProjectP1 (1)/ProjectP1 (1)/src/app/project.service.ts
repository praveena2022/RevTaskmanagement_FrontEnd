import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { project } from './admin-auth';
import { Observable } from 'rxjs';
import { Project } from './project';
import { ProjectP } from './projectp';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // getAllProjectManagers() {
  //   throw new Error('Method not implemented.');
  // }

  private apiURL = 'http://localhost:8080/projects'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // getData(): Observable<Project[]> {
  //   return this.http.get<project[]>(this.apiURL);
  // }

  getAllProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}`);
  }
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiURL}`);
  }

  getProjectsByTM(userId:string):Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiURL}/TM/${userId}`);
  }
  // getProjectsByPM(pmiD:string): Observable<ProjectP[]> {
  //   return this.http.get<ProjectP[]>(`${this.apiURL}/PM/${pmiD}`).pipe(
  //     tap(projects => console.log('Fetched projects:', projects))
  //   );
  // }

  

  getProjectById(id: number): Observable<Project | undefined> {
    
    return this.http.get<Project>(`${this.apiURL}/${id}`);
  }
}
