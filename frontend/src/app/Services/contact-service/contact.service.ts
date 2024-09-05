import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8080/addcontact';
  //private apiUrl = 'http://13.235.31.17:8080/scm/addcontact';

  constructor(private http: HttpClient) { }

  // Add contact API 
  saveContact(contact: Contact): Observable<Contact> {
    console.log("Service calling");
    console.log("Contact details:", contact);
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Contact>(this.apiUrl, contact, { headers: headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  // Show contact service url
  showContact(): Observable<Contact[]> {
    console.log('Show contacts from service');
    return this.http.get<Contact[]>('http://localhost:8080/display');
    //return this.http.get<Contact[]>('http://13.235.31.17:8080/scm/display');
  }

  //deletecontact service url
  //private baseUrl = 'http://localhost:9091';
  deleteContact(id:number):Observable<any>{
    console.log("delete sucessfully !");
    console.log(id);
  return this.http.delete(`http://localhost:8080/delete/${id}`);

  // return this.http.delete(`http://13.235.31.17:8080/scm/delete/${id}`);
  }
}
