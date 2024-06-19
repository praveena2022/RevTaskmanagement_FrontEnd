// import { Injectable } from '@angular/core';
// import { Observable, filter, of, switchMap, tap } from 'rxjs';
// import { ProjectP,TeamMember } from './projectp'; // Adjust the path as needed
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class ProjectServiceService {
//   apiURL='http://localhost:8080/projects';
  
//   constructor(private http: HttpClient) {}

//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   };

  
//   getProjects(): Observable<ProjectP[]> {
//     return this.http.get<ProjectP[]>(`${this.apiURL}`).pipe(
//       tap(projects => console.log('Fetched projects:', projects))
//     );
//   }

//   getTeamMembers(projectId:number):Observable<TeamMember[]>{
//     return this.http.get<TeamMember[]>(`${this.apiURL}/${projectId}/teammembers`);
//   }



//   getProjectById(id: number): Observable<ProjectP | undefined> {
    
//     return this.http.get<ProjectP>(`${this.apiURL}/${id}`);
//   }
//   // addTaskToProject(projectId: number, task: Task): Observable<ProjectP> {
//   //   return this.getProjectById(projectId).pipe(
//   //     filter((project): project is ProjectP => project !== undefined),
//   //     switchMap((project: ProjectP) => {
//   //       project.tasks.push(task);
//   //       return this.http.put<ProjectP>(`${this.apiURL}/${projectId}`, project, this.httpOptions);
//   //     })
//   //   );
//   // }
//   createProject(project: ProjectP): Observable<ProjectP> {
//     return this.http.post<ProjectP>(`${this.apiURL}/create-project`, project, this.httpOptions);
//   }
//   addMemberToProject(projectId: number, memberId: number): Observable<void> {
//     const url = `${this.apiURL}/${projectId}/addMember?memberId=${memberId}`;
//     return this.http.post<void>(url, {});
//   }

// // getTeamMembers(projectId:number):Observable<TeamMember[]>{
// //     return this.http.get<TeamMember[]>(`team-members/${projectId}/team-members`);
// //   }

// }
import { Injectable } from '@angular/core';
import { Observable, filter, of, switchMap, tap } from 'rxjs';
import { ProjectP, Task, TeamMember } from './projectp'; // Adjust the path as needed
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  apiURL='http://localhost:8080/projects';
  
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'userId':'4'
    })
  };

  
  getProjects(): Observable<ProjectP[]> {
    return this.http.get<ProjectP[]>(`${this.apiURL}`).pipe(
      tap(projects => console.log('Fetched projects:', projects))
    );
  }

  getProjectsByPM(pmiD:string): Observable<ProjectP[]> {
    return this.http.get<ProjectP[]>(`${this.apiURL}/PM/${pmiD}`).pipe(
      tap(projects => console.log('Fetched projects:', projects))
    );
  }

  getProjectById(id: number): Observable<ProjectP> {
    
    return this.http.get<ProjectP>(`${this.apiURL}/${id}`);
  }
  // addTaskToProject(projectId: number, task: Task): Observable<ProjectP> {
  //   return this.getProjectById(projectId).pipe(
  //     filter((project): project is ProjectP => project !== undefined),
  //     switchMap((project: ProjectP) => {
  //       project.tasks.push(task);
  //       return this.http.put<ProjectP>(`${this.apiURL}/${projectId}`, project, this.httpOptions);
  //     })
  //   );
  // }

  createProject(project: ProjectP,userId:string): Observable<ProjectP> {
    alert("project created");
    console.log("pm email:"+userId);
    return this.http.post<ProjectP>(`${this.apiURL}/create-project?projectManagerId=${userId}`, project, this.httpOptions);
  }
  //return this.http.post<any>(`${this.apiUrl}?memberId=${memberId}&projectId=${projectId}`,task);
  // addMemberToProject(projectId: number, memberId: number): Observable<void> {
  //   const url = `${this.apiURL}/${projectId}/addMember?memberId=${memberId}`;
  //   return this.http.post<void>(url, {});
  // }


  addMemberToProject(projectId: number, memberId: number): Observable<any> {
    alert("member added");
      return this.http.post(`${this.apiURL}/${projectId}/add/${memberId}`,null);
     }


  getTeamMembers(projectId:number):Observable<TeamMember[]>{
    return this.http.get<TeamMember[]>(`${this.apiURL}/${projectId}/teammembers`);
  }
}
