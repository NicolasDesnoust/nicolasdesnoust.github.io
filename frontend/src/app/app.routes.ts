import { Routes } from '@angular/router';
import { codingameRoutes } from './codingame/codingame.routes';
import { contactRoutes } from './contact/contact.routes';
import { HomeLayoutComponent } from './core/layouts/home-layout.component';
import { LightLayoutComponent } from './core/layouts/light-layout.component';
import { errorsRoutes } from './errors/errors.routes';
import { homeRoutes } from './home/home.routes';
import { projectsRoutes } from './projects/projects.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [...homeRoutes],
  },
  {
    path: 'codingame',
    component: LightLayoutComponent,
    children: [...codingameRoutes],
  },
  {
    path: 'projects',
    component: LightLayoutComponent,
    children: [...projectsRoutes],
  },
  {
    path: 'contact',
    component: LightLayoutComponent,
    children: [...contactRoutes],
  },
  {
    path: 'errors',
    component: LightLayoutComponent,
    children: [...errorsRoutes],
  },
  {
    path: '**',
    redirectTo: 'errors/not-found',
  },
];
