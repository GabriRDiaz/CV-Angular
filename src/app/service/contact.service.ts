import { Injectable } from '@angular/core';
import { Contact } from './Contact';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  // Add
  AddContact(data: Contact): Observable<any> {
    let API_URL = `${this.REST_API}/add-contact`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Get all objects
  GetContacts() {
    return this.httpClient.get(`${this.REST_API}/get-contact-list`);
  }
  // Get single object
  GetContact(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/read-contact/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  // Update
  updateContact(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-contact/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  // Delete
  deleteContact(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-contact/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
