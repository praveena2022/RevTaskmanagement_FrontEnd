import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamMember } from '../TeamMember';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {
  private baseUrl = 'http://localhost:8080/team-members';

  constructor(private http: HttpClient) { }

  // getTeamMembers(): Observable<TeamMember[]> {
  //   return this.http.get<TeamMember[]>(this.apiUrl);
  // }

  createTeamMember(member: TeamMember): Observable<TeamMember> {
    return this.http.post<TeamMember>(`${this.baseUrl}`, member);
  }

  // createProjectManager(projectManager: ProjectManager): Observable<ProjectManager> {
  //   return this.http.post<ProjectManager>(`${this.baseUrl}/create-project-manager`, projectManager);
  // }

  
}
