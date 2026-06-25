import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private router: Router) {}


  showModal = false;
  step = 1;
  servicioSeleccionado = '';

  form = {
    name: '',
    email: '',
    message: ''
  };

  abrirCotizacion() {
    this.showModal = true;
    this.step = 1;
    this.servicioSeleccionado = '';

    this.form = {
      name: '',
      email: '',
      message: ''
    };
  }

  seleccionarServicio(servicio: string) {
    this.servicioSeleccionado = servicio;
    this.step = 2;
  }

  onSubmit() {

    if (!this.servicioSeleccionado) return;

    const texto = `
*SOLICITUD ZTECH*

Servicio: ${this.servicioSeleccionado}
Nombre: ${this.form.name}
Correo: ${this.form.email}

Mensaje:
${this.form.message}
`;

    const url =
      `https://api.whatsapp.com/send?phone=529936024613&text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');

    this.showModal = false;
  }

irServicios() {
    this.router.navigate(['/servicios']);
  }

  irProyectos() {
    this.router.navigate(['/proyectos']);
  }

// Agrega esta propiedad y estos métodos a tu navbar.component.ts

menuAbierto = false;

toggleMenu(): void {
  this.menuAbierto = !this.menuAbierto;
}

cerrarMenu(): void {
  this.menuAbierto = false;
}

}
