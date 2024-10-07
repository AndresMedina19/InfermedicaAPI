import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../authentication.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ ]
})
export class AuthenticationModuleModule { }
