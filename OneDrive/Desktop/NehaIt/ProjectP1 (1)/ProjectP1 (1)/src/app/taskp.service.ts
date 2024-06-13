// // import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { Observable,tap } from 'rxjs';
// // import { Task } from './projectp';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class TaskpService {
// //   private apiUrl = 'http://localhost:8080/tasks';

// //   constructor(private http: HttpClient) { }
// //     httpOptions = {
// //       headers: new HttpHeaders({
// //         'Content-Type': 'application/json',
// //       }),
// //     };
  
// //   // getTasks(): Observable<Task> {
// //     //   return this.http.get<Task>(${this.apiUrl});
// //     // }
// //     getTasks(projectId: number):Observable<Task[]>{
// //       return this.http.get<Task[]>(`${this.apiUrl}/task/${projectId}`)
// //       .pipe(
// //         tap(tasks =>console.log('Tasks:',tasks))
// //       )
// //       ;
// //     }
// //     //work
// //     // createTask(task: Task): Observable<Task> {
// //     //   // You may need to adjust the API endpoint based on your backend implementation
// //     //   console.log("task is"+task);
// //     //   return this.http.post<Task>(`${this.apiUrl}`, task);
// //     // }
  
// //   // createTask(task: Task): Observable<Task> {
// //     //   return this.http.post<Task>(${this.apiUrl},task);
// //     // }
// //     createTask(task: Task,memberId:number): Observable<Task> {
// //       // You may need to adjust the API endpoint based on your backend implementation
// //       console.log("task is"+task);
// //       // return this.http.post<Task>(`${this.apiUrl}/createTasks/?memberId=${memberId}`, task);
// //      // const params = new HttpParams().set('memberId', memberId.toString());
  
// //       return this.http.post<Task>(`${this.apiUrl}/createTasks/${memberId}`, task);
// //         // params: { memberId: memberId.toString() }
// //       // });
  
// //     }
  
// //   updateTask(task: Task): Observable<Task> {
// //       return this.http.put<Task>(`${this.apiUrl}/${task.id}`,task);
// //     }
// //     addTask(task:Task){
// //       return this.http.post<Task>(`${this.apiUrl}`,task);
  
// //   }
// // }
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, tap } from 'rxjs';
// import { Task } from './projectp';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskpService {
//   private apiUrl = 'http://localhost:8080/tasks';


//   constructor(private http: HttpClient) { }
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     }),
//   };


//   // getTasks(): Observable<Task> {
//   //   return this.http.get<Task>(`${this.apiUrl}`);
//   // }
//   getTasks(projectId: number):Observable<Task[]>{
//     return this.http.get<Task[]>(`${this.apiUrl}/task/${projectId}`)
//     .pipe(
//       tap(tasks =>console.log('Tasks:',tasks))
//     )
//     ;
//   }
//   // createTask(task: Task,memberId:number,projectId:number): Observable<Task> {
    
//   //   console.log("task is"+task);
    
//   //   const params = new HttpParams().set('memberId', memberId.toString());

//   //   return this.http.post<Task>(`${this.apiUrl}/createTasks/${projectId}/${memberId}`, task);
//   //  ;

//   // }
//   createTask(task: any, memberId: number, projectId: number): Observable<any> {
//    // const url = `${this.apiUrl}?memberId=${memberId}&projectId=${projectId}`;
//     alert("task created");
//     return this.http.post<any>(`${this.apiUrl}?memberId=${memberId}&projectId=${projectId}`,task);
//   }

 
 

//   // createTask(task: Task): Observable<Task> {
//   //   return this.http.post<Task>(`${this.apiUrl}`,task);
//   // }
  

//   updateTask(task: Task): Observable<Task> {
//     return this.http.put<Task>(`${this.apiUrl}/${task.id}`,task);
//   }
//   addTask(task:Task){
//     return this.http.post<Task>(`${this.apiUrl}`,task);

//   }
// }
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task } from './projectp';

@Injectable({
  providedIn: 'root'
})
export class TaskpService {
  private apiUrl = 'http://localhost:8080/tasks';


  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  // getTasks(): Observable<Task> {
  //   return this.http.get<Task>(`${this.apiUrl}`);
  // }
  getTasks(projectId: number):Observable<Task[]>{
    return this.http.get<Task[]>(`${this.apiUrl}/task/${projectId}`)
    .pipe(
      tap(tasks =>console.log('Tasks:',tasks))
    )
    ;
  }
  // createTask(task: Task,memberId:number,projectId:number): Observable<Task> {
    
  //   console.log("task is"+task);
    
  //   const params = new HttpParams().set('memberId', memberId.toString());

  //   return this.http.post<Task>(`${this.apiUrl}/createTasks/${projectId}/${memberId}`, task);
  //  ;

  // }
  createTask(task: any, memberId: number, projectId: number): Observable<any> {
   // const url = `${this.apiUrl}?memberId=${memberId}&projectId=${projectId}`;
    alert("task created");
    return this.http.post<any>(`${this.apiUrl}?memberId=${memberId}&projectId=${projectId}`,task);
  }

 
 

  // createTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(`${this.apiUrl}`,task);
  // }
  

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`,task);
  }
  addTask(task:Task){
    return this.http.post<Task>(`${this.apiUrl}`,task);

  }
}
