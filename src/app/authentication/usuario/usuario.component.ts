import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioRequest } from '../../Models/usuarioRequest.model';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {
  myForm: FormGroup;
  message: string = "";
  messageShow: boolean= false;
  constructor(
    private readonly authenticationServiceService: AuthenticationServiceService,
    private readonly router: Router
  ) {
    this.myForm = new FormGroup({
      Nombre: new FormControl('', [Validators.required]),
      Contrasena: new FormControl('', [Validators.required]),
      Apellidos: new FormControl('', [Validators.required]),
      Celular: new FormControl('', [Validators.required]),
      Correo: new FormControl('', [Validators.required, Validators.email]),
      Edad: new FormControl('', [Validators.required]),
      Genero: new FormControl('', [Validators.required])

    });
  }

  onSubmit(){
    let usuarioRequest = new UsuarioRequest();
    usuarioRequest.Correo = this.myForm.get('Correo')?.value;
    usuarioRequest.Nombre = this.myForm.get('Nombre')?.value;
    usuarioRequest.Apellidos = this.myForm.get('Apellidos')?.value;
    usuarioRequest.Celular = this.myForm.get('Celular')?.value;
    usuarioRequest.Edad = this.myForm.get('Edad')?.value;
    usuarioRequest.Genero = this.myForm.get('Genero')?.value;
    usuarioRequest.Contrasena = this.myForm.get('Contrasena')?.value;

    this.authenticationServiceService.authenticateCreate(usuarioRequest)
    .subscribe({
      next: (v) => {
        this.message = v.message
        this.messageShow = true
        this.myForm.reset();
        this.blockMessage()
      },
      error: (e) =>{

      } })
   }

  blockMessage(){
    setTimeout(()=>{
      this.messageShow = false
    }, 1000);

  }



}
