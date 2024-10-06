export interface UserInfoResponse {
  Result: Result
  statusCode: number
  message: string
}

export interface Result {
  Id: number
  Nombre: string
  Apellidos: string
  Celular: string
  Correo: string
  Edad: string
  Genero: string
  statusCode: number
  message: string
}
