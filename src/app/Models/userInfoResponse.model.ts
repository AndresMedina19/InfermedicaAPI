import { BaseResponse } from "./baseRespose.model"

export class UserInfoResponse extends BaseResponse  {
  Result!: Result

}

export class Result extends BaseResponse {
  Id!: number
  Nombre!: string
  Apellidos!: string
  Celular!: string
  Correo!: string
  Edad!: string
  Genero!: string

}
