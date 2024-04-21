import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { VitrineComponent } from './vitrine/vitrine.component';

export const routes: Routes = [
    {
        path: 'header', 
        component: HeaderComponent
    },
    {
        path: '',
        component: VitrineComponent
    }
];
