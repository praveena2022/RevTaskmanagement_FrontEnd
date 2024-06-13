import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { client } from './projectp';
import { project } from './admin-auth';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/clients';

constructor(private http: HttpClient) { }

// getProjects(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }
  getclients():Observable<client[]>{
    return this.http.get<client[]>(this.apiUrl);
  }
  // ${this.apiURL}/${id});
  getProjectsbyClientId(clientId:number):Observable<project[]>{
    return this.http.get<project[]>(`${this.apiUrl}/${clientId}/projects`);

}
}