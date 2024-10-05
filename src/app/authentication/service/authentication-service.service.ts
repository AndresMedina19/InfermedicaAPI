import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Authentication } from '../../Models/authentication.Model'
import { environment } from '../../../environments/environment';  // Importamos environment
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../../Models/authenticationResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private readonly http: HttpClient) { }

  private readonly apiUrl = `${environment.apiUrl}/api/Authenticacion/Authentication`;

  authenticate(credentials: Authentication ): Observable<AuthenticationResponse> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' , 
        'Access-Control-Allow-Headers': 'Content-Type'


      })
    };
    return this.http.post<AuthenticationResponse>(this.apiUrl, credentials, httpOptions);
  }
}
