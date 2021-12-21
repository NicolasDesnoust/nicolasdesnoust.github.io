import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectContentResolver } from '../core/services/project-content.resolver';
import { PuzzleContentResolver } from '../core/services/puzzle-content.resolver';
import { ProjectDetailComponent } from '../shared/components/project-detail/project-detail.component';
import { PuzzleDetailComponent } from '../shared/components/puzzle-detail/puzzle-detail.component';
import { HomePageComponent } from './components/home-page.component';
import { FeaturedProjectsResolver } from './services/featured-projects.resolver';
import { FeaturedPuzzlesResolver } from './services/featured-puzzles.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      featuredProjects: FeaturedProjectsResolver,
      featuredPuzzles: FeaturedPuzzlesResolver,
    },
    children: [
      {
        path: 'projects/:projectId',
        component: ProjectDetailComponent,
        resolve: {
          projects: FeaturedProjectsResolver,
          projectContent: ProjectContentResolver,
        },
      },
      {
        path: 'puzzles/:puzzleId',
        component: PuzzleDetailComponent,
        resolve: {
          puzzles: FeaturedPuzzlesResolver,
          puzzleContent: PuzzleContentResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
