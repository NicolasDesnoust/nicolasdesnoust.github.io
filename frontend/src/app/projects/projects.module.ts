import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProjectsPageComponent],
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
