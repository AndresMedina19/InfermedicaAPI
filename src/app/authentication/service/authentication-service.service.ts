import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Authentication } from '../../Models/authentication.Model'
import { environment } from '../../../environments/environment';  // Importamos environment
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../../Models/authenticationResponse.model';
import { UserInfoResponse } from '../../Models/userInfoResponse.model';
import { BaseResponse } from '../../Models/baseRespose.model';
import { UsuarioRequest } from '../../Models/usuarioRequest.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private readonly http: HttpClient) { }

  private readonly apiUrl = environment.apiUrl;
  private readonly token = sessionStorage.getItem('token');
  headers(){
    const httpOvptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' , 
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '**'
      })
    };

    return httpOvptions;
  }

  getHeaderWithToken(){
    const httpOvptions = this.headers().headers.set('Authorization', `Bearer ${this.token}`);
    return httpOvptions;
  }

  authenticate(credentials: Authentication ): Observable<AuthenticationResponse> {
       return this.http.post<AuthenticationResponse>(`${this.apiUrl}/api/Authenticacion/Authentication`, credentials, this.headers());
  }

  getUserByEmail(email: string){
    const headers =this. getHeaderWithToken();
    return this.http.get<UserInfoResponse>(`${this.apiUrl}/api/Usuario/GetUserByEmail/${email}`,{headers});
  }

  authenticateCreate(usuarioRequest: UsuarioRequest ): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(`${this.apiUrl}/api/Authenticacion/Create`, usuarioRequest, this.headers());
  }


}
