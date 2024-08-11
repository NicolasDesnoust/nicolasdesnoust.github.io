import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodingameComponent } from './codingame/codingame.component';
import { HeroComponent } from './hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'desn-home-page',
  standalone: true,
  template: `
    <desn-hero />
    <desn-skills />
    <desn-projects />
    <div class="divider">ᔕ</div>
    <desn-codingame />

    <router-outlet />
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
    `,
  ],
  imports: [
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    CodingameComponent,
    RouterOutlet,
  ],
})
export class HomePageComponent {}
