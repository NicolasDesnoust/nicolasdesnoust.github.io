import { Routes } from '@angular/router';
import { PuzzleContentResolver } from '../core/services/puzzle-content.resolver';
import { PuzzlesResolver } from './services/puzzles.resolver';

export const codingameRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/codingame-page/codingame-page.component').then(
        (m) => m.CodingamePageComponent
      ),
    resolve: { puzzles: PuzzlesResolver },
    data: {
      title: 'Puzzles résolus',
    },
    children: [
      {
        path: 'puzzles/:puzzleId',
        loadComponent: () =>
          import(
            '../shared/components/puzzle-detail/puzzle-detail.component'
          ).then((m) => m.PuzzleDetailComponent),
        resolve: {
          puzzles: PuzzlesResolver,
          puzzleContent: PuzzleContentResolver,
        },
        data: {
          title: 'Puzzles résolus',
        },
      },
    ],
  },
];
