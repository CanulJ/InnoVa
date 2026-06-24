import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {


  showModal = false;
  submitted = false;
  servicioSeleccionado = '';
 
  form = {
    name: '',
    email: '',
    message: ''
  };
 
  camaraItems = [
    { icon: '📷', label: 'Cámaras HD' },
    { icon: '🌙', label: 'Visión Nocturna' },
    { icon: '☁️', label: 'Nube / Local' },
    { icon: '📱', label: 'App Móvil' },
    { icon: '🚨', label: 'Alertas' },
    { icon: '🔍', label: 'IA Detección' },
  ];
 
  stats = [
    { value: '24/7', label: 'Disponibilidad' },
    { value: '<2h', label: 'Tiempo de respuesta' },
    { value: '100%', label: 'Satisfacción' },
    { value: '+50', label: 'Clientes atendidos' },
  ];
 
  solicitarServicio(servicio: string) {
    this.servicioSeleccionado = servicio;
    this.form = { name: '', email: '', message: '' };
    this.submitted = false;
    this.showModal = true;
  }
 
  cerrarModal() {
    this.showModal = false;
  }
 
 onSubmit() {

  const texto = `
Hola, me gustaría solicitar una cotización.

Servicio: ${this.servicioSeleccionado}

Nombre: ${this.form.name}
Correo: ${this.form.email}

Descripción:
${this.form.message}
`;

  const whatsappUrl =
    `https://api.whatsapp.com/send?phone=529936024613&text=${encodeURIComponent(texto)}`;

  window.open(whatsappUrl, '_blank');

  this.showModal = false;
}

}
