import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleCardComponent } from './components/puzzle-card/puzzle-card.component';
import { SrcsetPipe } from './pipes/srcset.pipe';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [PuzzleCardComponent, ProjectCardComponent, SrcsetPipe],
  imports: [CommonModule],
  exports: [
    CommonModule,
    PuzzleCardComponent,
    ProjectCardComponent,
    SrcsetPipe,
  ],
})
export class SharedModule {}
