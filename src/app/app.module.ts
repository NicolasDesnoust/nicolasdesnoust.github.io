import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer.component';
import { NavbarComponent } from './navbar.component';
import { HeroComponent } from './hero.component';
import { SkillsComponent } from './skills.component';
import { AboutMeComponent } from './about-me.component';
import { ProjectsComponent } from './projects.component';
import { SkillLevelIndicatorComponent } from './skill-level-indicator/skill-level-indicator.component';
import { ProjectCardComponent } from './project-card.component';
import { CodingameComponent } from './codingame.component';
import { SkillListComponent } from './skill-list.component';
import { ResumeCallToActionComponent } from './resume-call-to-action.component';
import { SkillBoxComponent } from './skill-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillLevelIndicatorComponent,
    ProjectCardComponent,
    CodingameComponent,
    SkillListComponent,
    ResumeCallToActionComponent,
    SkillBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
