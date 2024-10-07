import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationServiceService } from '../../authentication/service/authentication-service.service';
import { environment } from '../../../environments/environment';
import { CondicionesRequest } from '../../Models/condicionesRequest.model';
import { BaseResponse } from '../../Models/baseRespose.model';
import { CondicionUserRequest } from '../../Models/condicionUserRequest.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly apiUrl = environment.apiUrl;
  constructor(private readonly http: HttpClient,private readonly authenticationServiceService: AuthenticationServiceService,) { }

  getCondiciones(edad: string){
    const headers =this.authenticationServiceService.getHeaderWithToken();
    return this.http.get<CondicionesRequest>(`${this.apiUrl}/api/Condicion/GetCondiciones/${edad}`,{headers});
  }

  createCondiciones(request: CondicionUserRequest){
    const headers =this.authenticationServiceService.getHeaderWithToken();
    return this.http.post<BaseResponse>(`${this.apiUrl}/api/Condicion/CreateCondiciones`, request, {headers});
  }

  deleteCondiciones(idUser: string){
    const headers =this.authenticationServiceService.getHeaderWithToken();
    return this.http.delete<BaseResponse>(`${this.apiUrl}/api/Condicion/Delete/${idUser}`,  {headers});
  }

}
