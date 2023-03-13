import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { throwError } from 'rxjs';  
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
 _url='http://localhost:3000/enroll' ;
  constructor(public httpClient:HttpClient) { }

   //pipe is used to chain multiple operators together  
  enroll(user:User){ 
   return this.httpClient.post<User>(this._url, user)
             .pipe(catchError(this.errorHandler));         
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

  //errorHandling in DTF : - catch the error in the service and then throw it back to the component
  //- and in the component we can handle the error in the subscribe method of the observable
  //- then bind the error message to the template HTML
}