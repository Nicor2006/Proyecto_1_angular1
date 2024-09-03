import { Routes } from '@angular/router';
import { Ejemplo1Component } from './componentes/ejemplo-1/ejemplo-1.component';
import { Ejemplo2Component } from './componentes/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './componentes/ejemplo3/ejemplo3.component';

export const routes: Routes = [
    {
        path: '', 
        component: Ejemplo1Component
    },
    {
        path: '2',
        component: Ejemplo2Component
    },
    {
        path:'3',
        component: Ejemplo3Component
    }
];
