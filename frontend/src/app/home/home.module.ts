import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CodingameComponent } from './components/codingame/codingame.component';
import { HeroComponent } from './components/hero.component';
import { HomePageComponent } from './components/home-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillBoxComponent } from './components/skill-box.component';
import { SkillLevelIndicatorComponent } from './components/skill-level-indicator/skill-level-indicator.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    SkillLevelIndicatorComponent,
    CodingameComponent,
    SkillListComponent,
    SkillBoxComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
