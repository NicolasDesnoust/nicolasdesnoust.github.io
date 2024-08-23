import { Routes } from '@angular/router';
import { PuzzleContentResolver } from '../core/services/puzzle-content.resolver';
import { PuzzleDetailComponent } from '../shared/components/puzzle-detail/puzzle-detail.component';
import { CodingamePageComponent } from './components/codingame-page/codingame-page.component';
import { puzzlesResolver } from './services/puzzles.resolver';

export const codingameRoutes: Routes = [
  {
    path: '',
    component: CodingamePageComponent,
    resolve: { puzzles: puzzlesResolver },
    data: {
      title: 'Solved puzzles',
    },
    children: [
      {
        path: 'puzzles/:puzzleId',
        component: PuzzleDetailComponent,
        resolve: {
          puzzles: puzzlesResolver,
          puzzleContent: PuzzleContentResolver,
        },
        data: {
          title: 'Solved puzzles',
        },
      },
    ],
  },
];
