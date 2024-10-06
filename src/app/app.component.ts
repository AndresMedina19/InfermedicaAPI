import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { AuthInterceptor, httpInterceptorProviders } from './middleware/AuthInterceptor';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers:[AuthInterceptor, httpInterceptorProviders],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'InfermedicaAPI';
}
