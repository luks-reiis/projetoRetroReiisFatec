import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheComponent } from './detalhe/detalhe.component';

export const routes: Routes = [
    {
        path: 'header', 
        component: HeaderComponent
    },
    {
        path: '',
        component: VitrineComponent
    },
    {
        path: 'detalhe',
        component: DetalheComponent
    }
];
