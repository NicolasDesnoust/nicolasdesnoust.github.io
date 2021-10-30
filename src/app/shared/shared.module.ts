import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MarkdownModule } from 'ngx-markdown';
import { AtroposComponent } from './components/atropos/atropos.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { PuzzleCardComponent } from './components/puzzle-card/puzzle-card.component';
import { PuzzleDetailComponent } from './components/puzzle-detail/puzzle-detail.component';
import { QuickOverviewComponent } from './components/quick-overview/quick-overview.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SecuredExternalLinkDirective } from './directives/secured-external-link.directive';
import { JoinPipe } from './pipes/join.pipe';
import { SrcsetPipe } from './pipes/srcset.pipe';

const components = [
  ProjectDetailComponent,
  PuzzleDetailComponent,
  QuickOverviewComponent,
  PuzzleCardComponent,
  ProjectCardComponent,
  AtroposComponent,
];

const directives = [ClickOutsideDirective, SecuredExternalLinkDirective];

const pipes = [SrcsetPipe, JoinPipe];

const modules = [ScullyLibModule, CommonModule];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [MarkdownModule.forChild(), RouterModule, ...modules],
  exports: [...components, ...directives, ...pipes, ...modules],
})
export class SharedModule {}
