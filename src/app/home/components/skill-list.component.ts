import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Skill } from '../model/skill';

@Component({
  selector: 'desn-skill-list',
  template: `
    <p class="list-title has-text-primary has-text-weight-normal">
      {{ title }}
    </p>
    <ng-container *ngIf="filteredSkills$ | async as filteredSkills">
      <div *ngFor="let skill of filteredSkills" class="columns is-mobile">
        <div
          class="column is-flex is-justify-content-flex-end has-text-right has-text-right p-1"
        >
          {{ skill.name }}
        </div>
        <div class="column is-flex is-align-items-center p-1">
          <desn-skill-level-indicator
            [value]="skill.level"
          ></desn-skill-level-indicator>
        </div>
      </div>
    </ng-container>
    <a
      *ngIf="limit && limit < skills.length"
      (click)="applyLimit()"
      aria-label="Expand button"
    >
      Voir {{ expanded ? 'plus' : 'moins' }}
      <span class="icon">
        <i class="fas fa-angle-{{ expanded ? 'down' : 'up' }}"></i>
      </span>
      <!-- [name]="expanded ? 'chevron-up' : 'more-horizontal'" -->
    </a>
  `,
  styles: [
    `
      p.list-title {
        margin-top: 5px;
        margin-bottom: 12px;
      }
    `,
  ],
})
export class SkillListComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() skills: Skill[] = [];
  @Input() limit: number = 3;
  filteredSkills$ = new BehaviorSubject<Skill[]>([]);
  expanded = false;

  ngOnInit(): void {
    this.applyLimit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.limit) {
      this.applyLimit();
    }
  }

  applyLimit() {
    if (this.skills) {
      const filteredSkills = this.expanded
        ? this.skills
        : this.skills.slice(0, this.limit);

      this.expanded = !this.expanded;
      this.filteredSkills$.next(filteredSkills);
    }
  }
}
