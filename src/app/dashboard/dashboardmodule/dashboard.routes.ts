import { Routes } from "@angular/router";
import { MenuprincipalComponent } from "../menuprincipal/menuprincipal.component";
import { CondicionmedicaComponent } from '../condicionmedica/condicionmedica.component';
import { SintomasComponent } from "../sintomas/sintomas.component";
import { DiagnosticoComponent } from "../diagnostico/diagnostico.component";


export const routes: Routes = [
  { path: '', component: MenuprincipalComponent},
  { path: 'condicion', component: CondicionmedicaComponent},
  { path: 'sintomas', component: SintomasComponent},
  { path: 'diagnostico', component: DiagnosticoComponent},


];
