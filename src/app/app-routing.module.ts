import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CodingamePageComponent } from './codingame/components/codingame-page/codingame-page.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { ProjectsPageComponent } from './projects/components/projects-page/projects-page.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
};

const routes: Routes = [
  { path: 'codingame', component: CodingamePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
