import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Authentication } from '../../Models/authentication.Model';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(
    private readonly authenticationServiceService: AuthenticationServiceService,
    private router: Router
  ) {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      let authentication = new Authentication();
      authentication.Correo = this.myForm.get('email')?.value;
      authentication.Password = this.myForm.get('password')?.value;

      this.authenticationServiceService.authenticate(authentication).subscribe({
        next: (v) => {
          if (v.statusCode == 200) {
            sessionStorage.setItem('token', v.Result);

            this.getInfoUser(authentication.Correo);
          }
        },
        error: (e) => {
          console.log('error');
        },
      });
    }
  }

  getInfoUser(email: string) {
     this.authenticationServiceService.getUserByEmail(email).subscribe({
      next: (v) => {
        let nombres = v.Result.Nombre+" "+v.Result.Apellidos;
        sessionStorage.setItem('nombres',nombres);
        sessionStorage.setItem('userId',v.Result.Id.toString());


      // Redirigir a la página principal
      this.router.navigate(['/home']);
      },
      error: (e) => {
        console.log('error');
      },
    });

  }
}
