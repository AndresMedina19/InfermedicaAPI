export class CondicionUserRequest{
  Conditions!: ConditionRequest[]
}

export class ConditionRequest {
  IdUsuario!: number
  IdCondicion!: string
  Nombre!: string
  Categoria!: string
  Severidad!: string
}
