import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
     // Here is baseurl of controller
  baseUrl = 'http://localhost:8080/login';
  // baseUrl = 'http://13.235.31.17:8080/scm/login';
  


  private user: User | null = null;

   constructor( private http:HttpClient){}
   
  // saveStudent service url API..
  saveUser(user:User):Observable<User>{
    console.log("from service calling...")
    console.log(user);
    return this.http.post<User>(`http://localhost:8080/save`,user);
    // return this.http.post<User>(`http://13.235.31.17:8080/scm/save`,user);

  }
        // login user API   
  loginUser(username: string, password: string):Observable<string>{
    console.log("form user login service calling...");
    const loginData = { username, password };
    console.log("username: "+username);
    console.log("password: "+password)
    console.log("after url "+loginData);
    return this.http.post<string>(this.baseUrl, loginData, { responseType: 'text' as 'json' })
      .pipe(
        catchError(error => {
          //console.error('Login failed', error);
          return throwError(() => new Error('Login failed. Please check your credentials.'));
          
        })
      );

  }
  // Method to set user details after login
  setUser(user: User): void {
    this.user = user;
    // Optionally store user in local storage
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Method to get current user details
  getUser(): User | null {
    return this.user || JSON.parse(localStorage.getItem('user') || 'null');
  }

  // Method to log out the user
  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
  }

  
  

}
