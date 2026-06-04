import { Routes } from '@angular/router';
import { Inicio } from './Pages/inicio/inicio';
import { Servicios } from './Pages/servicios/servicios';

export const routes: Routes = [

    {path: '', component: Inicio},
    {path: 'inicio', component: Inicio},
    {path: 'inicio/Id', component: Inicio},

    {path: '', component: Servicios},
    {path: 'servicios', component: Servicios},

];
