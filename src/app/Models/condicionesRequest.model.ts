import { BaseResponse } from "./baseRespose.model"

export class CondicionesRequest extends BaseResponse {
  conditions!: Condition[]

}

export class Condition {
  id!: string
  name!: string
  common_name!: string
  sex_filter!: string
  categories!: string[]
  prevalence!: string
  acuteness!: string
  severity!: string
  extras!: Extras
  triage_level!: string
  recommended_channel!: string
}

export class Extras {
  icd10_code!: string
  hint!: string
}
