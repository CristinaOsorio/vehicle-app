import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'vehicles',
        loadComponent: () =>
            import('./features/vehicles/vehicles-list/vehicles-list.component'),
    },
    {
        path: '**',
        redirectTo: '/vehicles',
        pathMatch: 'full',
    },
];
