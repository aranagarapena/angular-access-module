import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequestModel } from '../../interfaces/login-request.model';
import { CommonModule } from '@angular/common'; // ✅ Añadir esto

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  loginData: LoginRequestModel = {
    usernameOrEmail: '',
    password: ''
  };


  onSubmit() {
    if (!this.loginData.usernameOrEmail || !this.loginData.password) return;

    // Aquí enviarás al backend
    console.log('Datos listos para enviar:', this.loginData);
  }
}
