// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { User } from './User';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class UserServiceService {
// //   private apiUrl = 'http://localhost:8080/tasks';

// //   constructor(private http: HttpClient) { }

// //   getTasks(): Observable<User[]> {
// //     return this.http.get<User[]>(this.apiUrl);
// //   }

// //   createTask(task: User): Observable<User> {
// //     return this.http.post<User>(this.apiUrl, task);
// //   }

// //   updateTask(task: User): Observable<User> {
// //     return this.http.put<User>(`${this.apiUrl}/${task.id}`,task);
// //   }
// // }

// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { Task, User } from './User';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class UserServiceService {
// //   private apiUrl = 'http://localhost:8080/tasks';

// //   constructor(private http: HttpClient) { }

// //   getTasks(): Observable<User[]> {
// //     return this.http.get<User[]>(this.apiUrl);
// //   }

// //   // createTask(task: User): Observable<User> {
// //   //   return this.http.post<User>(this.apiUrl, task);
// //   // }

// //   createTask(task: User): Observable<User> {
// //     return this.http.post<User>(this.apiUrl, task);
// //   }

// //   updateTask(task: User): Observable<User> {
// //     return this.http.put<User>(`${this.apiUrl}/${task.id}`, task);
// //   }
// // }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from './User';
// import { TeamMember } from './projectp';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserServiceService {
//   private apiUrl = 'http://localhost:8080/team-members';

//   constructor(private http: HttpClient) { }

//   getTasks(): Observable<User[]> {
//     return this.http.get<User[]>(this.apiUrl);
//   }

//   createTask(task: User): Observable<User> {
//     return this.http.post<User>(this.apiUrl, task);
//   }

//   updateTask(task: User): Observable<User> {
//     return this.http.put<User>(`${this.apiUrl}/${task.taskId}`,task);
//   }
// getAllMembers(): Observable<TeamMember[]> {
//   return this.http.get<TeamMember[]>(this.apiUrl);
// }
// // getTeamMemberById(id: number): Observable<TeamMember[]> {
// //   return this.http.get<TeamMember[]>(`${this.apiUrl}/${id}/team-members`);
// // }
// getTeamMemberById(id: number): Observable<TeamMember[]> {
//   return this.http.get<TeamMember[]>(`${this.apiUrl}/${id}`);
// }

// updateTeamMember(id: number, teamMember: TeamMember): Observable<TeamMember> {
//   return this.http.put<TeamMember>(`${this.apiUrl}/${id}`, teamMember);
// }
// // addMemberToProject(projectId: number, memberId: number): Observable<any> {
// //   return this.http.post(`${this.apiUrl}/projects/${projectId}/add/${memberId}`,null);
// // }

// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { TeamMember } from './projectp';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'http://localhost:8080/team-members';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createTask(task: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, task);
  }

  updateTask(task: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${task.taskId}`,task);
  }
getAllMembers(): Observable<TeamMember[]> {
  return this.http.get<TeamMember[]>(this.apiUrl);
}
// getTeamMemberById(id: number): Observable<TeamMember[]> {
//   return this.http.get<TeamMember[]>(`${this.apiUrl}/${id}/team-members`);
// }
getTeamMemberById(id: number): Observable<TeamMember[]> {
  return this.http.get<TeamMember[]>(`${this.apiUrl}/${id}`);
}

updateTeamMember(id: number, teamMember: TeamMember): Observable<TeamMember> {
  return this.http.put<TeamMember>(`${this.apiUrl}/${id}`, teamMember);
}
// addMemberToProject(projectId: number, memberId: number): Observable<any> {
//   return this.http.post(`${this.apiUrl}/projects/${projectId}/add/${memberId}`,null);
// }

}