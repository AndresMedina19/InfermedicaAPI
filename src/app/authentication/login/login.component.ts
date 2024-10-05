import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Authentication } from '../../Models/authentication.Model';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  myForm: FormGroup;


  constructor(private readonly authenticationServiceService: AuthenticationServiceService)
  {
     this.myForm = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.email]),
       password: new FormControl('', [Validators.required])
     });


   }


   onSubmit()
   {
      if (this.myForm.valid) {

        let authentication = new Authentication();
        authentication.Correo = this.myForm.get('email')?.value;
        authentication.Password = this.myForm.get('password')?.value;


        this.authenticationServiceService.authenticate(authentication)
        .subscribe({next: (v)=>{

          console.log("token"+v.Result);

        },  error: (e) =>{
          console.log("error");
        }})

      }
    }


}
