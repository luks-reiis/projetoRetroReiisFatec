import { Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CestaComponent } from './cesta/cesta.component';

export const routes: Routes = [
    {
        path: '',
        component: VitrineComponent
    },
    {
        path: 'detalhe',
        component: DetalheComponent
    },
    {
        path: 'cesta',
        component: CestaComponent
    }
];
