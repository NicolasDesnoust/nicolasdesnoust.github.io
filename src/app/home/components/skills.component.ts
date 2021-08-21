import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';

@Component({
  selector: 'desn-skills',
  template: `
    <section
      id="skills"
      class="section skills is-medium has-text-centered has-background-primary"
    >
      <h1 class="title is-spaced has-text-white">
        Bonjour, je m'appelle Nicolas. Ravi de vous rencontrer !
      </h1>
      <h2 class="subtitle has-text-white">
        Voici un aperçu des compétences que j'ai pu aquérir. Une note proche de
        0 signifie que je viens récemment de découvrir cette technologie. Une
        note proche de 5 n'indique pas que je connais tout à propos de cette
        technologie, mais plutôt que je suis confient dans mes capacités à
        l'utiliser avec succès dans un projet d'entreprise.
      </h2>
      <div class="container is-narrow">
        <div class="tile is-ancestor">
          <div class="tile is-6 is-vertical is-parent">
            <div class="tile is-child">
              <desn-skill-box
                imageUrl="assets/icons/programmation.png"
                title="Langages"
                description="I value simple content structure, clean design patterns, and thoughtful
        interactions."
              >
                <desn-skill-list [skills]="languages"></desn-skill-list>
              </desn-skill-box>
            </div>

            <div class="tile is-child">
              <desn-skill-box
                imageUrl="assets/icons/database.png"
                title="Bases de données"
                description="I value simple content structure, clean design patterns, and thoughtful
        interactions."
              >
                <desn-skill-list title="SQL :" [skills]="sqlDatabases">
                </desn-skill-list>
                <desn-skill-list title="NoSQL :" [skills]="nosqlDatabases">
                </desn-skill-list>
              </desn-skill-box>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child">
              <desn-skill-box
                imageUrl="assets/icons/ux-interface.png"
                title="Frameworks & librairies"
                description="I value simple content structure, clean design patterns, and thoughtful
        interactions."
              >
                <desn-skill-list
                  title="Frameworks :"
                  [skills]="frameworks"
                ></desn-skill-list>
                <desn-skill-list
                  title="Librairies :"
                  [skills]="librairies"
                ></desn-skill-list>
              </desn-skill-box>
            </div>
          </div>
        </div>

        <div class="tile is-horizontal is-parent">
          <div class="tile is-child">
            <desn-skill-box
              imageUrl="assets/icons/ux-interface.png"
              title="Divers"
              description="I value simple content structure, clean design patterns, and thoughtful
        interactions."
            >
              <desn-skill-list
                title="DevOps :"
                [skills]="devops"
              ></desn-skill-list>
              <desn-skill-list
                title="Méthodologies :"
                [skills]="methodologies"
              ></desn-skill-list>
              <desn-skill-list
                title="Logiciels :"
                [skills]="softwares"
              ></desn-skill-list>
            </desn-skill-box>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      section.skills {
        margin-top: -14rem;
        margin-bottom: -14rem;
      }
    `,
  ],
})
export class SkillsComponent implements OnInit {
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
  ];

  frameworks: Skill[] = [
    { name: 'Angular', level: 5 },
    { name: 'Spring Boot', level: 4 },
    { name: 'NestJS', level: 3 },
  ];

  sqlDatabases: Skill[] = [
    { name: 'MySQL', level: 5 },
    { name: 'PostgreSQL', level: 4 },
    { name: 'HyperSQL / H2', level: 4 },
  ];

  nosqlDatabases: Skill[] = [
    { name: 'Elasticsearch', level: 5 },
    { name: 'MongoDB', level: 4 },
  ];

  methodologies: Skill[] = [
    { name: 'Scrum', level: 4 },
    { name: 'Kanban', level: 4 },
    { name: 'Test Driven Devlopment', level: 2 },
  ];

  devops: Skill[] = [
    { name: 'Docker', level: 4 },
    { name: 'Gitlab CI', level: 3 },
    { name: 'Github Actions', level: 1 },
  ];

  softwares: Skill[] = [
    { name: 'Eclipse / STS', level: 5 },
    { name: 'Jira / Confluence', level: 4 },
    { name: 'Visual Studio Code', level: 5 },
    { name: 'Gitkraken', level: 4 },
    { name: 'Postman', level: 3 },
    { name: 'DBeaver', level: 3 },
    { name: 'MobaXterm', level: 2 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
