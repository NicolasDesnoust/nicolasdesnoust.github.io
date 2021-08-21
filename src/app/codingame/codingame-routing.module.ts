import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodingamePageComponent } from './components/codingame-page/codingame-page.component';

const routes: Routes = [{ path: '', component: CodingamePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodingameRoutingModule {}
