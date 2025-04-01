import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterRequestModel } from '../../interfaces/register-request.model';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  registerFormData: RegisterRequestModel = {
    nombre: '',
    apellido1: '',
    apellido2: '',
    tipoDocumento: 'dni',
    identificacion: '',
    prefijo: '+34',
    telefono: '',
    email: '',
    password: '',
    repeatPassword: '',
    ciudad: '',
    cp: '',
    direccion: '',
    fechaNacimiento: '',
    genero: '',
    sector: '',
    terminos: false
  };

  validateIdentificacion(): boolean {
    const value = this.registerFormData.identificacion.trim();

    if (this.registerFormData.tipoDocumento === 'dni') {
      const dniPattern = /^\d{8}[a-zA-Z]$/;
      if (!dniPattern.test(value)) return false;
      const number = parseInt(value.substring(0, 8), 10);
      const letter = value.charAt(8).toUpperCase();
      const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
      return letter === letters[number % 23];
    }

    if (this.registerFormData.tipoDocumento === 'pasaporte') {
      const passportPattern = /^[A-Z]{1,3}\d{6,9}$/i;
      return passportPattern.test(value);
    }

    return false;
  }

  validatePassword(password: string): boolean {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,}$/;
    return pattern.test(password);
  }

  onSubmit() {
    if (!this.validateIdentificacion()) return;
    if (!this.validatePassword(this.registerFormData.password)) return;
    if (this.registerFormData.password !== this.registerFormData.repeatPassword) return;

    console.log('Datos listos para enviar:', this.registerFormData);

  }

}
