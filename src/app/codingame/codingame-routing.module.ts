import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleContentResolver } from '../core/services/puzzle-content.resolver';
import { PuzzleDetailComponent } from '../shared/components/puzzle-detail/puzzle-detail.component';
import { CodingamePageComponent } from './components/codingame-page/codingame-page.component';
import { PuzzlesResolver } from './services/puzzles.resolver';

const routes: Routes = [
  {
    path: '',
    component: CodingamePageComponent,
    resolve: { puzzles: PuzzlesResolver },
    data: {
      title: 'Puzzles résolus',
    },
    children: [
      {
        path: 'puzzles/:puzzleId',
        component: PuzzleDetailComponent,
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodingameRoutingModule {}
