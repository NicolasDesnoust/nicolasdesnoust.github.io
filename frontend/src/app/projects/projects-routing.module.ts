import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ProjectContentResolver } from '../core/services/project-content.resolver';
import { ProjectsResolver } from './services/projects.resolver';
import { ProjectDetailComponent } from '../shared/components/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
    resolve: {
      projects: ProjectsResolver,
    },
    data: {
      title: 'Projets',
    },
    children: [
      {
        path: ':projectId',
        component: ProjectDetailComponent,
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
