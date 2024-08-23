import { Routes } from '@angular/router';
import { ProjectContentResolver } from '../core/services/project-content.resolver';
import { ProjectDetailComponent } from '../shared/components/project-detail/project-detail.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { projectsResolver } from './services/projects.resolver';

export const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
    resolve: {
      projects: projectsResolver,
    },
    data: {
      title: 'Projects',
    },
    children: [
      {
        path: ':projectId',
        component: ProjectDetailComponent,
        resolve: {
          projects: projectsResolver,
          projectContent: ProjectContentResolver,
        },
        data: {
          title: 'Projects',
        },
      },
    ],
  },
];
