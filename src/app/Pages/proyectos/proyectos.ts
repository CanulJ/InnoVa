import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../navbar/navbar';


interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  ubicacion?: string;
  anio?: number;
}
 

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {

  
  /* ── Filtros ── */
  categorias: string[] = ['Videovigilancia', 'Redes', 'Desarrollo Web', 'Soporte Técnico'];
  filtroActivo: string = 'Todos';
  proyectosFiltrados: Proyecto[] = [];
 
  /* ── Modal ── */
  showModal  = false;
  submitted  = false;
  form = { name: '', email: '', message: '' };
 
  /* ── Proyectos ─────────────────────────────────────────────────────────────
   *  Reemplaza cada objeto con tus datos reales.
   *  - imagen: ruta relativa desde /assets/ o URL absoluta
   *  - ubicacion y año son opcionales, elimina la propiedad si no aplica
   * ─────────────────────────────────────────────────────────────────────── */
  proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: 'Sistema CCTV Residencial',
      descripcion: 'Instalación de 8 cámaras HD en exterior e interior con grabación local en DVR y acceso remoto desde celular.',
      categoria: 'Videovigilancia',
      imagen: 'img/WebCR.jpeg',
      ubicacion: 'Ciudad del Carmen',
      anio: 2024
    },
    {
      id: 2,
      titulo: 'Red Empresarial con Cableado Cat6',
      descripcion: 'Diseño e instalación de cableado estructurado Cat6 con switch administrable y puntos de acceso WiFi para 40 usuarios.',
      categoria: 'Redes',
      imagen: 'img/CE.jpeg',
      ubicacion: 'Ciudad del Carmen',
      anio: 2024
    },
    {
      id: 3,
      titulo: 'Aplicacion Web para ventas en línea',
      descripcion: 'Desarrollo de aplicacion web para ventas de plataformas en linea optimizado para contacto directo mediante whatsapp.',
      categoria: 'Desarrollo Web',
      imagen: 'img/WebI.png',
      ubicacion: 'Ciudad del Carmen',
      anio : 2025
    },
    {
      id: 4,
      titulo: 'Sistema de Videovigilancia Comercial',
      descripcion: 'Instalación de 16 cámaras IP 4K en local comercial con detección de movimiento e integración a plataforma en la nube.',
      categoria: 'Videovigilancia',
      imagen: 'img/VGE.jpg',
      ubicacion: 'Ciudad del Carmen',
      anio: 2025
    },
    {
      id: 5,
      titulo: 'Red Mesh para Oficinas',
      descripcion: 'Implementación de red WiFi Mesh de alta cobertura en dos plantas de oficinas, eliminando zonas sin señal.',
      categoria: 'Redes',
      imagen: 'img/MER.jpeg',
      ubicacion: 'Campeche',
      anio: 2025
    },
    {
      id: 6,
      titulo: 'Mantenimiento de Equipos de Cómputo',
      descripcion: 'Mantenimiento preventivo y actualización de software en 20 equipos para empresa local, reduciendo fallas un 70%.',
      categoria: 'Soporte Técnico',
      imagen: 'img/MC.jpg',
      ubicacion: 'Ciudad del Carmen',
      anio: 2025
    },
  ];
 
  ngOnInit(): void {
    this.proyectosFiltrados = [...this.proyectos];
  }
 
  filtrar(categoria: string): void {
    this.filtroActivo = categoria;
    this.proyectosFiltrados = categoria === 'Todos'
      ? [...this.proyectos]
      : this.proyectos.filter(p => p.categoria === categoria);
  }
 
  solicitarCotizacion(): void {
    this.form = { name: '', email: '', message: '' };
    this.submitted = false;
    this.showModal = true;
  }
 
  cerrarModal(): void {
    this.showModal = false;
  }
 
  onSubmit(): void {
    const numero   = '529XXXXXXXXX'; // 🔴 Reemplaza con tu número de WhatsApp
    const mensaje  = `Hola ZTech Solutions, me interesa solicitar una cotización.\n\n` +
                     `Nombre: ${this.form.name}\n` +
                     `Correo: ${this.form.email}\n` +
                     `Mensaje: ${this.form.message}`;
    const url      = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    this.submitted = true;
    this.showModal = false;
  }
   }