import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: ()=>import('./authentication/authentication-module/authentication-module/authentication-module.module').then(m => m.AuthenticationModuleModule)  },
  {path: 'home', loadChildren: ()=>import('./dashboard/dashboardmodule/dashboardmodule.module').then(m => m.DashboardmoduleModule)  }

];

