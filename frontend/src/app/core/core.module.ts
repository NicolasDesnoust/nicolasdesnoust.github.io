import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorMessageComponent } from './components/not-found/error-message/error-message.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResumeCallToActionComponent } from './components/resume-call-to-action/resume-call-to-action.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LightLayoutComponent } from './layouts/light-layout.component';
import { PageTitleService } from './services/page-title.service';
import { ScrollBehaviorService } from './services/scroll-behavior.service';

const COMPONENTS: any[] = [
  FooterComponent,
  NavbarComponent,
  ResumeCallToActionComponent,
  NotFoundComponent,
  ErrorMessageComponent
];

const LAYOUTS: any[] = [HomeLayoutComponent, LightLayoutComponent];

@NgModule({
  declarations: [...COMPONENTS, ...LAYOUTS],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ScullyLibModule.forRoot({ alwaysMonitor: true }),
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    SharedModule
  ],
  exports: [...COMPONENTS, ...LAYOUTS],
  providers: [],
})
export class CoreModule {
  constructor(
    _scrollBehaviorService: ScrollBehaviorService,
    _pageTitleService: PageTitleService
  ) {
    // ! Ces services sont injectés dans le constructeur du module pour qu'ils ne
    // ! soient pas supprimés par Angular (tree-shaking)
  }
}
