import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodingamePageComponent } from './components/codingame-page/codingame-page.component';
import { PuzzleResolver } from './services/puzzle.resolver';

const routes: Routes = [
  {
    path: '',
    component: CodingamePageComponent,
    resolve: { puzzles: PuzzleResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodingameRoutingModule {}
