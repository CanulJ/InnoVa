import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  constructor(private router: Router) {}

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

  onSubmit() {
    this.submitted = true;

    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', email: '', message: '' };
    }, 3000);
  }

  irServicios() {
    this.router.navigate(['/servicios']);
  }
}