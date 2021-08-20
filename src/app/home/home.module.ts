import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './components/about-me.component';
import { CodingameComponent } from './components/codingame.component';
import { HeroComponent } from './components/hero.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar.component';
import { ProjectCardComponent } from './components/project-card.component';
import { ProjectsComponent } from './components/projects.component';
import { ResumeCallToActionComponent } from './components/resume-call-to-action.component';
import { SkillBoxComponent } from './components/skill-box.component';
import { SkillLevelIndicatorComponent } from './components/skill-level-indicator/skill-level-indicator.component';
import { SkillListComponent } from './components/skill-list.component';
import { SkillsComponent } from './components/skills.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from './components/footer.component';

@NgModule({
  declarations: [
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
    SkillBoxComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
