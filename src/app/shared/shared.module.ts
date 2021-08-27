import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleCardComponent } from './components/puzzle-card/puzzle-card.component';
import { SrcsetPipe } from './pipes/srcset.pipe';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { PuzzleDetailComponent } from './components/puzzle-detail/puzzle-detail.component';

@NgModule({
  declarations: [
    PuzzleCardComponent,
    ProjectCardComponent,
    SrcsetPipe,
    ProjectDetailComponent,
    PuzzleDetailComponent,
  ],
  imports: [
    CommonModule,
    ScullyLibModule,
    MarkdownModule.forChild(),
    RouterModule,
  ],
  exports: [
    CommonModule,
    PuzzleCardComponent,
    ProjectCardComponent,
    SrcsetPipe,
    ProjectDetailComponent,
    PuzzleDetailComponent,
    ScullyLibModule,
  ],
})
export class SharedModule {}
