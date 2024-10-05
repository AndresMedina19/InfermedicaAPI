import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: ()=>import('./authentication/authentication-module/authentication-module/authentication-module.module').then(m => m.AuthenticationModuleModule)  }

];

