import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '../../model/skill';
import { SkillBoxComponent } from '../skill-box.component';
import { SkillListComponent } from '../skill-list/skill-list.component';

@Component({
  selector: 'desn-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styles: [
    `
      .notification.is-info.is-light {
        background-color: #eff5fb1a;
        color: #d2dff3f0;
        text-align: left;
      }
    `,
  ],
  imports: [CommonModule, SkillBoxComponent, SkillListComponent],
})
export class SkillsComponent {
  languages: Skill[] = [
    { name: 'Java', level: 5 },
    { name: 'TypeScript', level: 5 },
    { name: 'JavaScript', level: 4 },
    { name: 'HTML', level: 5 },
    { name: 'CSS / SCSS', level: 4 },
    { name: 'C', level: 2 },
  ];

  librairies: Skill[] = [
    { name: 'JPA / Hibernate', level: 4 },
    { name: 'JUnit + AssertJ', level: 5 },
    { name: 'Rxjs', level: 4 },
    { name: 'Cucumber', level: 3 },
    { name: 'ArchUnit', level: 4 },
    { name: 'Ngrx', level: 3 },
    { name: 'Angular Material Design', level: 4 },
    { name: 'Bootstrap', level: 3 },
    { name: 'Lombok', level: 4 },
  ];

  frameworks: Skill[] = [
    { name: 'Angular', level: 5 },
    { name: 'Spring Boot', level: 5 },
    { name: 'NestJS', level: 2 },
  ];

  databases: Skill[] = [
    { name: 'PostgreSQL', level: 4 },
    { name: 'Elasticsearch', level: 2 },
    { name: 'HyperSQL / H2', level: 4 },
    { name: 'MySQL', level: 4 },
  ];

  methodologies: Skill[] = [
    { name: 'Scrum', level: 4 },
    { name: 'Kanban', level: 4 },
    { name: 'Test Driven Devlopment', level: 2 },
  ];

  devops: Skill[] = [
    { name: 'Docker', level: 4 },
    { name: 'Github Actions', level: 4 },
    { name: 'Gitlab CI', level: 3 },
  ];

  softwares: Skill[] = [
    { name: 'Visual Studio Code', level: 5 },
    { name: 'IntelliJ', level: 3 },
    { name: 'Jira / Confluence', level: 4 },
    { name: 'Gitkraken', level: 4 },
    { name: 'Postman', level: 4 },
    { name: 'DBeaver', level: 3 },
    { name: 'MobaXterm', level: 2 },
  ];
}
