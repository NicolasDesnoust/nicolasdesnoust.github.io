import { Component, Input, OnInit } from '@angular/core';
import { Skill } from "../model/skill";

@Component({
  selector: 'desn-skill-list',
  template: `
    <p class="list-title has-text-primary has-text-weight-normal">
      {{ title }}
    </p>
    <div *ngFor="let skill of skills" class="columns">
      <div class="column is-flex is-justify-content-flex-end p-1">
        {{ skill.name }}
      </div>
      <div class="column is-flex p-1">
        <desn-skill-level-indicator
          [value]="skill.level"
        ></desn-skill-level-indicator>
      </div>
    </div>
  `,
  styles: [
    `
      p.list-title {
        margin-top: 50px;
        margin-bottom: 12px;
      }
    `,
  ],
})
export class SkillListComponent implements OnInit {
  @Input() title: string = '';
  @Input() skills: Skill[] = [];

  constructor() {}

  ngOnInit(): void {}
}
