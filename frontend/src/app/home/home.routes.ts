import { Routes } from '@angular/router';
import { ProjectContentResolver } from '../core/services/project-content.resolver';
import { PuzzleContentResolver } from '../core/services/puzzle-content.resolver';
import { ProjectDetailComponent } from '../shared/components/project-detail/project-detail.component';
import { PuzzleDetailComponent } from '../shared/components/puzzle-detail/puzzle-detail.component';
import { HomePageComponent } from './components/home-page.component';
import { featuredProjectsResolver } from './services/featured-projects.resolver';
import { featuredPuzzlesResolver } from './services/featured-puzzles.resolver';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {
      featuredProjects: featuredProjectsResolver,
      featuredPuzzles: featuredPuzzlesResolver,
    },
    children: [
      {
        path: 'projects/:projectId',
        component: ProjectDetailComponent,
        resolve: {
          projects: featuredProjectsResolver,
          projectContent: ProjectContentResolver,
        },
      },
      {
        path: 'puzzles/:puzzleId',
        component: PuzzleDetailComponent,
        resolve: {
          puzzles: featuredPuzzlesResolver,
          puzzleContent: PuzzleContentResolver,
        },
      },
    ],
  },
];
