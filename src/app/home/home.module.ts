import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './components/about-me.component';
import { CodingameComponent } from './components/codingame.component';
import { HeroComponent } from './components/hero.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectCardComponent } from './components/project-card.component';
import { ProjectsComponent } from './components/projects.component';
import { SkillBoxComponent } from './components/skill-box.component';
import { SkillLevelIndicatorComponent } from './components/skill-level-indicator/skill-level-indicator.component';
import { SkillListComponent } from './components/skill-list.component';
import { SkillsComponent } from './components/skills.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    SkillsComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillLevelIndicatorComponent,
    ProjectCardComponent,
    CodingameComponent,
    SkillListComponent,
    SkillBoxComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
