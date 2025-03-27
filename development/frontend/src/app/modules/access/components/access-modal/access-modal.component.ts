import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-access-modal',
  standalone: true,
  imports: [LoginFormComponent, CommonModule, RegisterFormComponent],
  templateUrl: './access-modal.component.html',
  styleUrls: ['./access-modal.component.scss']
})
export class AccessModalComponent {
  @Input() isLogin: boolean = true; // Empieza con el formulario de login
  @Output() close = new EventEmitter<void>(); // 🔹 Evento para cerrar el modal

  closeModal() {
    // Aquí podrías emitir un evento para cerrar el modal en otro componente
    this.close.emit();
    console.log("Modal cerrado");
  }

  toggleView(view: 'login' | 'register') {
    this.isLogin = view === 'login';
  }

  continueAsGuest() {
    console.log("Continuando como invitado");
    this.closeModal();
  }
}
