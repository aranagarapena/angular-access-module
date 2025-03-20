import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() openModal = new EventEmitter<void>();

  onOpenModal() {
    console.log("🔹 Botón de usuario clicado: Emitiendo evento `openModal`");
    this.openModal.emit();
  }


}
