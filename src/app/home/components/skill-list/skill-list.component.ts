import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Skill } from '../../model/skill';

@Component({
  selector: 'desn-skill-list',
  templateUrl: './skill-list.component.html',
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
