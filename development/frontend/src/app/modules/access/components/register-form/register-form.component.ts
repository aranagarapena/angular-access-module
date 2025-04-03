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

  validateTelefono(): boolean {
    const { prefijo, telefono } = this.registerFormData;
  
    if (!telefono) return false;
  
    // Si es España, validar con patrón estricto
    if (prefijo === '+34') {
      const regex = /^[6|7|9]\d{8}$/;
      return regex.test(telefono.trim());
    }
  
    // Para otros países solo validamos que tenga 9 dígitos
    const basicRegex = /^\d{9}$/;
    return basicRegex.test(telefono.trim());
  }
  
  

  validateIdentificacion(): boolean {
    const value = this.registerFormData.identificacion?.trim().toUpperCase();
    const tipo = this.registerFormData.tipoDocumento;
  
    if (!value || !tipo) return false;
  
    if (tipo === 'dni') {
      const dniRegex = /^\d{8}[A-Z]$/;
      if (!dniRegex.test(value)) return false;
  
      const numero = parseInt(value.substring(0, 8), 10);
      const letra = value.charAt(8);
      const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
      const letraEsperada = letras[numero % 23];
  
      return letra === letraEsperada;
    }
  
    if (tipo === 'pasaporte') {
      const passportRegex = /^[A-Z]{1,3}\d{6,9}$/;
      return passportRegex.test(value);
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
