import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Iniciar sesión con:', this.username, this.password);
    // Aquí se podrá añadir autenticación real más adelante
  }
}
