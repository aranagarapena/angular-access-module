import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AccessModalComponent } from './modules/access/components/access-modal/access-modal.component';
import { CommonModule } from '@angular/common'; // ✅ Importamos CommonModule

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AccessModalComponent, CommonModule] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-access-module';
  isModalOpen: boolean = false; // 🔹 Estado del modal

  openModal() {
    console.log("🔹 Evento `openModal` recibido: Abriendo modal...");
    this.isModalOpen = true; // 🔹 Abre el modal cuando el usuario hace clic en el icono
  }

}
