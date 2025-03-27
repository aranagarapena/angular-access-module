import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  // Obligatorios
  nombre = '';
  apellido1 = '';
  apellido2 = '';
  dni = '';
  telefono = '';
  email = '';
  password = '';
  repeatPassword = '';

  // Opcionales
  ciudad = '';
  cp = '';
  direccion = '';
  fechaNacimiento: string = '';
  genero = '';
  sector = '';
  terminos = false;

  onSubmit() {
    console.log('Formulario enviado:', {
      nombre: this.nombre,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      dni: this.dni,
      telefono: this.telefono,
      email: this.email,
      password: this.password,
      repeatPassword: this.repeatPassword,
      ciudad: this.ciudad,
      cp: this.cp,
      direccion: this.direccion,
      fechaNacimiento: this.fechaNacimiento,
      genero: this.genero,
      sector: this.sector,
      terminos: this.terminos
    });
  }

}
