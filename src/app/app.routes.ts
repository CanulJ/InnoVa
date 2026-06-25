import { Routes } from '@angular/router';
import { Inicio } from './Pages/inicio/inicio';
import { Servicios } from './Pages/servicios/servicios';
import { Navbar } from './Pages/navbar/navbar';
import { Proyectos } from './Pages/proyectos/proyectos';
import { Soporte } from './Pages/soporte/soporte';


export const routes: Routes = [

    {path: '', component: Inicio},
    {path: 'inicio', component: Inicio},
    {path: 'inicio/Id', component: Inicio},

    {path: '', component: Servicios},
    {path: 'servicios', component: Servicios},
    
    {path: '', component: Navbar},
    {path: 'navbar', component: Navbar},

    {path: '', component: Proyectos},
    {path: 'proyectos', component: Proyectos},

    {path: '', component: Soporte},
    {path: 'soporte', component: Soporte},
];
