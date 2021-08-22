import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ProjectResolver } from './services/project.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
    resolve: {
      projects: ProjectResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
