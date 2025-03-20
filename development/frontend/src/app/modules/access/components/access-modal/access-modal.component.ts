import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-access-modal',
  standalone: true,
  templateUrl: './access-modal.component.html',
  styleUrls: ['./access-modal.component.scss']
})
export class AccessModalComponent {
  @Input() isLogin: boolean = true; // Empieza con el formulario de login

  closeModal() {
    // Aquí podrías emitir un evento para cerrar el modal en otro componente
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
