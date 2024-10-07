import { Component } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Condition } from '../../Models/condicionesRequest.model';
import { CondicionUserRequest, ConditionRequest } from '../../Models/condicionUserRequest.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-condicionmedica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './condicionmedica.component.html',
  styleUrl: './condicionmedica.component.scss'
})
export class CondicionmedicaComponent {

  conditions!: Condition[]
  conditionsRequest: ConditionRequest[] = [];

  constructor(private readonly dashboardService:DashboardService) {
    const edad: string =  sessionStorage.getItem('edad') ?? "0";
    this.getCondition(edad);

  }

  getCondition(edad: string){

    this.dashboardService.getCondiciones(edad)
    .subscribe({
      next: (v)=> {
        this.conditions = v.conditions
      },
      error: (e)=> {
      }

    })
  }


  toggleSelection(x: Condition){
    let  conditionRequest = new ConditionRequest();
    const idUser: string =  sessionStorage.getItem('userId') ?? "0";
    conditionRequest.IdUsuario = parseInt(idUser);
    conditionRequest.Nombre = x.name;
    conditionRequest.IdCondicion = x.id;
    conditionRequest.Categoria = x.categories.join(', ');
    conditionRequest.Severidad = x.severity
    const index = this.conditionsRequest.indexOf(conditionRequest);
    if (index === -1) {
      this.conditionsRequest.push(conditionRequest);
    } else {
      this.conditionsRequest.splice(index, 1);
    }

  }


 async  sendConditions(){
    if (this.conditionsRequest.length!==0) {
      var request = new CondicionUserRequest();
      request.Conditions = this.conditionsRequest;
      let result = await this.eliminarCondiciones()
      if (result===true) {
        this.dashboardService.createCondiciones(request)
            .subscribe({
              next(value) {
                alert(value.message)
              },error(err) {

              }
            });
      }
    }else{
      alert("debe seleccionar al menos una condicion")
    }
  }

 async  eliminarCondiciones():Promise<boolean | void>{
  const idUser: string =  sessionStorage.getItem('userId') ?? "0";
  let result = false
   await this.dashboardService.deleteCondiciones(idUser).toPromise()
   result = true

    return Promise.resolve(result)
  }
}
