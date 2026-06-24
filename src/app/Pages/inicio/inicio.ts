import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  constructor(private router: Router) {}

  showModal = false;
  step = 1;
  servicioSeleccionado = '';

  form = {
    name: '',
    email: '',
    message: ''
  };

  cards = [
    { icon: '⚡', title: 'Rápido', desc: 'Rendimiento optimizado para que tu flujo nunca se detenga.' },
    { icon: '🔒', title: 'Seguro', desc: 'Encriptación de extremo a extremo en todos tus datos.' },
    { icon: '📊', title: 'Análisis', desc: 'Reportes en tiempo real para tomar mejores decisiones.' },
    { icon: '🤝', title: 'Soporte', desc: 'Equipo disponible 24/7 para resolver tus dudas.' },
  ];

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
}