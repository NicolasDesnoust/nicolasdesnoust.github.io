import { Routes } from '@angular/router';
import { ProjectContentResolver } from '../core/services/project-content.resolver';
import { PuzzleContentResolver } from '../core/services/puzzle-content.resolver';
import { FeaturedProjectsResolver } from './services/featured-projects.resolver';
import { FeaturedPuzzlesResolver } from './services/featured-puzzles.resolver';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home-page.component').then(
        (m) => m.HomePageComponent
      ),
    resolve: {
      featuredProjects: FeaturedProjectsResolver,
      featuredPuzzles: FeaturedPuzzlesResolver,
    },
    children: [
      {
        path: 'projects/:projectId',
        loadComponent: () =>
          import(
            '../shared/components/project-detail/project-detail.component'
          ).then((m) => m.ProjectDetailComponent),
        resolve: {
          projects: FeaturedProjectsResolver,
          projectContent: ProjectContentResolver,
        },
      },
      {
        path: 'puzzles/:puzzleId',
        loadComponent: () =>
          import(
            '../shared/components/puzzle-detail/puzzle-detail.component'
          ).then((m) => m.PuzzleDetailComponent),
        resolve: {
          puzzles: FeaturedPuzzlesResolver,
          puzzleContent: PuzzleContentResolver,
        },
      },
    ],
  },
];
