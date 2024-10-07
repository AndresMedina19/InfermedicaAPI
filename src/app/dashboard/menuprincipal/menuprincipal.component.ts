import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuprincipal',
  standalone: true,
  imports: [],
  templateUrl: './menuprincipal.component.html',
  styleUrl: './menuprincipal.component.scss'
})
export class MenuprincipalComponent {

 /**
  *
  */
 constructor(private readonly router: Router) {


 }

 goMenu(key: number){

  switch (key) {
    case 1:
      this.router.navigate(['home/condicion']);
      break;
    case 2:
        this.router.navigate(['home/sintomas']);
        break;
    case 3:
          this.router.navigate(['home/diagnostico']);
          break;
    default:
      break;
  }

 }


}
