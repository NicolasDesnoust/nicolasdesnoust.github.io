import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const errorsRoutes: Routes = [
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
];
