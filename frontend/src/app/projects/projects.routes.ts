import { Routes } from '@angular/router';
import { ProjectContentResolver } from '../core/services/project-content.resolver';
import { ProjectsResolver } from './services/projects.resolver';

export const projectsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/projects-page/projects-page.component').then(
        (m) => m.ProjectsPageComponent
      ),
    resolve: {
      projects: ProjectsResolver,
    },
    data: {
      title: 'Projets',
    },
    children: [
      {
        path: ':projectId',
        loadComponent: () =>
          import(
            '../shared/components/project-detail/project-detail.component'
          ).then((m) => m.ProjectDetailComponent),
        resolve: {
          projects: ProjectsResolver,
          projectContent: ProjectContentResolver,
        },
        data: {
          title: 'Projets',
        },
      },
    ],
  },
];
