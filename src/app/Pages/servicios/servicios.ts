import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule, FormsModule],
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
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.showModal = false;
      this.form = { name: '', email: '', message: '' };
    }, 2500);
  }

}
