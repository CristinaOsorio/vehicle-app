import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'vehicles',
        children: [
            {
                path: '',
                loadComponent: () =>
                    import(
                        './features/vehicles/vehicles-list/vehicles-list.component'
                    ),
            },
            {
                path: 'create',
                loadComponent: () =>
                    import('./features/vehicles/form/form.component'),
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: '',
            },
        ],
    },
    {
        path: '**',
        redirectTo: '/vehicles',
        pathMatch: 'full',
    },
];
