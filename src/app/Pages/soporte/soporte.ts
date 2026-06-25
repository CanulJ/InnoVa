import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Mensaje {
  role: 'user' | 'bot';
  text: string;
  opciones?: Opcion[];
}
 
interface Opcion {
  label: string;
  accion: string;
}
 
// ── Árbol de respuestas ─────────────────────────────────────────────────────
const RESPUESTAS: Record<string, { texto: string; opciones: Opcion[] }> = {
 
  inicio: {
    texto: '¡Hola! 👋 Soy el asistente de <strong>ZTech Solutions</strong>. ¿Sobre qué te puedo ayudar?',
    opciones: [
      { label: '📷 Videovigilancia',        accion: 'videovigilancia' },
      { label: '🌐 Redes',                  accion: 'redes' },
      { label: '💻 Desarrollo de Software', accion: 'software' },
      { label: '🛠️ Soporte Técnico',        accion: 'soporte' },
      { label: '💰 Precios',                accion: 'precios' },
      { label: '📍 Cobertura',              accion: 'cobertura' },
    ]
  },
 
  videovigilancia: {
    texto: '📷 Instalamos sistemas de cámaras <strong>HD y 4K</strong> para interior y exterior, con grabación local o en la nube y acceso remoto desde tu celular. ¿Qué más te interesa saber?',
    opciones: [
      { label: '¿Para hogar o empresa?',            accion: 'cam_tipos' },
      { label: '¿Cuánto cuesta?',                   accion: 'precios' },
      { label: '¿Cómo solicito una instalación?',   accion: 'cotizacion' },
      { label: '← Volver al inicio',                accion: 'inicio' },
    ]
  },
 
  cam_tipos: {
    texto: 'Trabajamos para <strong>hogares</strong> (2–8 cámaras), <strong>negocios</strong> (8–16 cámaras) y <strong>empresas</strong> (16+ cámaras con gestión centralizada). Todos los sistemas incluyen instalación y configuración.',
    opciones: [
      { label: '¿Cuánto cuesta?',       accion: 'precios' },
      { label: 'Quiero una cotización', accion: 'cotizacion' },
      { label: '← Volver al inicio',   accion: 'inicio' },
    ]
  },
 
  redes: {
    texto: '🌐 Diseñamos e instalamos <strong>redes WiFi Mesh</strong>, cableado estructurado <strong>Cat6/Cat6A</strong>, configuración de routers y switches, y soluciones VPN para hogares y empresas.',
    opciones: [
      { label: '¿Qué incluye la instalación?', accion: 'redes_detalle' },
      { label: '¿Cuánto cuesta?',              accion: 'precios' },
      { label: 'Quiero una cotización',        accion: 'cotizacion' },
      { label: '← Volver al inicio',          accion: 'inicio' },
    ]
  },
 
  redes_detalle: {
    texto: 'La instalación incluye: diagnóstico del espacio, selección del equipo ideal, instalación física, configuración y pruebas. También ofrecemos <strong>mantenimiento preventivo y correctivo</strong>.',
    opciones: [
      { label: 'Quiero una cotización', accion: 'cotizacion' },
      { label: '← Volver al inicio',   accion: 'inicio' },
    ]
  },
 
  software: {
    texto: '💻 Desarrollamos <strong>páginas web</strong>, landing pages, <strong>sistemas empresariales</strong> y aplicaciones web a la medida con integración a APIs externas.',
    opciones: [
      { label: '¿Qué tecnologías usan?', accion: 'software_tech' },
      { label: '¿Cuánto cuesta?',        accion: 'precios' },
      { label: 'Quiero una cotización',  accion: 'cotizacion' },
      { label: '← Volver al inicio',    accion: 'inicio' },
    ]
  },
 
  software_tech: {
    texto: 'Trabajamos con tecnologías modernas como <strong>Angular, React, Node.js</strong> y bases de datos SQL/NoSQL. Todos los proyectos incluyen soporte y mantenimiento continuo.',
    opciones: [
      { label: 'Quiero una cotización', accion: 'cotizacion' },
      { label: '← Volver al inicio',   accion: 'inicio' },
    ]
  },
 
  soporte: {
    texto: '🛠️ Brindamos soporte <strong>remoto y en sitio</strong>: diagnóstico, reparación de equipos, mantenimiento preventivo, actualización de software y respaldo de datos.',
    opciones: [
      { label: '¿Tiempo de respuesta?', accion: 'soporte_tiempo' },
      { label: '¿Cuánto cuesta?',       accion: 'precios' },
      { label: 'Quiero soporte ahora',  accion: 'cotizacion' },
      { label: '← Volver al inicio',   accion: 'inicio' },
    ]
  },
 
  soporte_tiempo: {
    texto: 'Para soporte remoto respondemos en <strong>menos de 2 horas</strong>. Para visitas en sitio coordinamos una cita según tu disponibilidad, generalmente el mismo día o al siguiente.',
    opciones: [
      { label: 'Quiero soporte ahora', accion: 'cotizacion' },
      { label: '← Volver al inicio',  accion: 'inicio' },
    ]
  },
 
  precios: {
    texto: '💰 Los precios dependen del alcance de cada proyecto. Ofrecemos <strong>cotizaciones gratuitas y sin compromiso</strong>. ¿Quieres que un asesor te contacte con una propuesta personalizada?',
    opciones: [
      { label: '✅ Sí, quiero una cotización', accion: 'cotizacion' },
      { label: '← Volver al inicio',          accion: 'inicio' },
    ]
  },
 
  cobertura: {
    texto: '📍 Atendemos principalmente <strong>Ciudad del Carmen y la región de Campeche</strong>. Para proyectos fuera del área evaluamos caso por caso. ¿Quieres coordinar una visita?',
    opciones: [
      { label: 'Quiero coordinar una visita', accion: 'cotizacion' },
      { label: '← Volver al inicio',         accion: 'inicio' },
    ]
  },
 
  cotizacion: {
    texto: '¡Perfecto! 🚀 Te vamos a redirigir a WhatsApp para que un asesor de <strong>ZTech Solutions</strong> te atienda personalmente y prepare tu cotización.',
    opciones: [
      { label: '💬 Abrir WhatsApp',  accion: 'whatsapp' },
      { label: '← Volver al inicio', accion: 'inicio' },
    ]
  },
 
};
// ───────────────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-soporte',
  imports: [CommonModule],
  templateUrl: './soporte.html',
  styleUrl: './soporte.css',
})
export class Soporte implements OnInit, AfterViewChecked  {


  @ViewChild('scrollTarget')    scrollTarget!:    ElementRef;
  @ViewChild('scrollTargetFab') scrollTargetFab!: ElementRef;
 
  private readonly WHATSAPP = '529936024613';
 
  mensajes:       Mensaje[] = [];
  mensajesFab:    Mensaje[] = [];
  chatAbierto:    boolean   = false;
  mostrarTooltip: boolean   = false;
 
  private scrollPending = false;
 
  ngOnInit(): void {
    this.agregarBotMsg('inicio', this.mensajes);
    this.agregarBotMsg('inicio', this.mensajesFab);
    setTimeout(() => { this.mostrarTooltip = true; }, 3000);
  }
 
  ngAfterViewChecked(): void {
    if (this.scrollPending) {
      this.scrollBottom();
      this.scrollPending = false;
    }
  }
 
  // ── Helpers ──────────────────────────────────────────────────
 
  private agregarBotMsg(accion: string, lista: Mensaje[]): void {
    const nodo = RESPUESTAS[accion];
    if (!nodo) return;
    lista.push({ role: 'bot', text: nodo.texto, opciones: [...nodo.opciones] });
    this.scrollPending = true;
  }
 
  private desactivarOpciones(lista: Mensaje[]): void {
    const ultimo = [...lista].reverse().find(m => m.role === 'bot');
    if (ultimo) ultimo.opciones = [];
  }
 
  private scrollBottom(): void {
    try {
      if (this.scrollTarget?.nativeElement)
        this.scrollTarget.nativeElement.scrollTop = this.scrollTarget.nativeElement.scrollHeight;
      if (this.scrollTargetFab?.nativeElement)
        this.scrollTargetFab.nativeElement.scrollTop = this.scrollTargetFab.nativeElement.scrollHeight;
    } catch {}
  }
 
  // ── Sección ──────────────────────────────────────────────────
 
  elegir(opcion: Opcion): void {
    this.desactivarOpciones(this.mensajes);
    this.mensajes.push({ role: 'user', text: opcion.label });
    if (opcion.accion === 'whatsapp') { this.abrirWhatsApp(); return; }
    this.agregarBotMsg(opcion.accion, this.mensajes);
  }
 
  // ── Flotante ─────────────────────────────────────────────────
 
  elegirFab(opcion: Opcion): void {
    this.desactivarOpciones(this.mensajesFab);
    this.mensajesFab.push({ role: 'user', text: opcion.label });
    if (opcion.accion === 'whatsapp') { this.abrirWhatsApp(); return; }
    this.agregarBotMsg(opcion.accion, this.mensajesFab);
  }
 
  // ── FAB ──────────────────────────────────────────────────────
 
  toggleChat(): void {
    this.chatAbierto = !this.chatAbierto;
    this.mostrarTooltip = false;
    if (this.chatAbierto) setTimeout(() => { this.scrollPending = true; }, 50);
  }
 
  // ── WhatsApp ─────────────────────────────────────────────────
 
  abrirWhatsApp(): void {
    const msg = encodeURIComponent('Hola ZTech Solutions, me gustaría obtener más información y una cotización.');
    window.open(`https://wa.me/${this.WHATSAPP}?text=${msg}`, '_blank');
  }

}
