import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  submitted = false;
 
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
 
  plans = [
    { name: 'Básico',    price: 'Gratis',  usuarios: true,  reportes: false, soporte: false, api: false },
    { name: 'Pro',       price: '$19/mes', usuarios: true,  reportes: true,  soporte: true,  api: false },
    { name: 'Empresas',  price: '$49/mes', usuarios: true,  reportes: true,  soporte: true,  api: true  },
  ];
 
  features = [
    { key: 'usuarios', label: 'Usuarios ilimitados' },
    { key: 'reportes', label: 'Reportes avanzados' },
    { key: 'soporte',  label: 'Soporte prioritario' },
    { key: 'api',      label: 'Acceso a API' },
  ];
 
  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', email: '', message: '' };
    }, 3000);
  }
}
 


