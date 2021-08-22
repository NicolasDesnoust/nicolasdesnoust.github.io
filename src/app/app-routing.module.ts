import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CodingamePageComponent } from './codingame/components/codingame-page/codingame-page.component';
import { HomeLayoutComponent } from './core/layouts/home-layout.component';
import { LightLayoutComponent } from './core/layouts/light-layout.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { ProjectsPageComponent } from './projects/components/projects-page/projects-page.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
};

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: LightLayoutComponent,
    children: [
      {
        path: 'codingame',
        loadChildren: () =>
          import('./codingame/codingame.module').then((m) => m.CodingameModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
    ],
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
