import { Component } from '@angular/core';
import { Skill } from '../../model/skill';

@Component({
  selector: 'desn-skills',
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
})
export class SkillsComponent {
  languages: Skill[] = [
    { name: 'Java', level: 5 },
    { name: 'TypeScript', level: 4 },
    { name: 'JavaScript', level: 3 },
    { name: 'HTML', level: 5 },
    { name: 'CSS / SCSS', level: 4 },
    { name: 'C', level: 2 },
  ];

  librairies: Skill[] = [
    { name: 'Ngrx', level: 3 },
    { name: 'Rxjs', level: 4 },
    { name: 'Scully', level: 3 },
    { name: 'Angular Material Design', level: 4 },
    { name: 'Bootstrap', level: 3 },
    { name: 'Bulma', level: 2 },
    { name: 'JPA / Hibernate', level: 4 },
    { name: 'Lombok', level: 4 },
  ];

  frameworks: Skill[] = [
    { name: 'Angular', level: 5 },
    { name: 'Spring Boot', level: 4 },
    { name: 'NestJS', level: 3 },
  ];

  databases: Skill[] = [
    { name: 'PostgreSQL', level: 5 },
    { name: 'Elasticsearch', level: 4 },
    { name: 'HyperSQL / H2', level: 4 },
    { name: 'MySQL', level: 5 },
    { name: 'MongoDB', level: 2 },
  ];

  methodologies: Skill[] = [
    { name: 'Scrum', level: 4 },
    { name: 'Kanban', level: 4 },
    { name: 'Test Driven Devlopment', level: 3 },
  ];

  devops: Skill[] = [
    { name: 'Docker', level: 4 },
    { name: 'Gitlab CI', level: 3 },
    { name: 'Github Actions', level: 2 },
  ];

  softwares: Skill[] = [
    { name: 'Eclipse / STS', level: 5 },
    { name: 'Jira / Confluence', level: 4 },
    { name: 'Visual Studio Code', level: 5 },
    { name: 'Gitkraken', level: 4 },
    { name: 'Postman', level: 4 },
    { name: 'DBeaver', level: 3 },
    { name: 'MobaXterm', level: 2 },
  ];
}
