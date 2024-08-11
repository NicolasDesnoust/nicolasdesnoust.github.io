import { Routes } from '@angular/router';

export const contactRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./contact-page.component').then((m) => m.ContactPageComponent),
  },
];
