import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemAuthService {
  private apiUrl = 'http://localhost:8080/team-members';  // Spring Boot backend URL

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

//   login(email: string, password: string): Observable<boolean> {
//     const loginRequest = { email, password };
//     return this.http.post<{ message: string }>(`${this.apiUrl}/login`, loginRequest, this.httpOptions).pipe(
//       map(response => {
//         console.log('Login response:', response);
//         return response.message.includes('Login successful');
//       }),
//       catchError(error => {
//         console.log('An error occurred while logging in', error);
//         return throwError(error); // Propagate the error
//       })
//     );
//   }
login(email: string, password: string): Observable<boolean> {
  const loginRequest = { email, password };
 
  console.log(loginRequest.email);

  return this.http.post<{ message: string, userId: string }>(`${this.apiUrl}/login`, loginRequest, this.httpOptions).pipe(
    map(response => {
      console.log('Login response:', response.userId);
      // return response.message.includes('Login successful');
      if (response.message.includes('Login successful')) {
        localStorage.setItem('userId', response.userId);
       localStorage.setItem('userEmail', email);
        return true;
      }
      return false;
    }),
    catchError(error => {
      console.log('An error occurred while logging in', error);
      return throwError(error); // Propagate the error
    })
    );
  }
getUserId():string{
  return localStorage.getItem('userId') || '';
}
}
