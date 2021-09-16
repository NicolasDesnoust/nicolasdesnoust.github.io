import { Component } from '@angular/core';
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
        Voici un aperçu des compétences que j'ai pu aquérir, aussi bien durant
        mes expériences professionnelles, durant mon master en Ingéniérie du
        Logiciel et des Données ou via des projets personnels.
      </h2>
      <div class="notification is-info is-light">
        Une note proche de 0 signifie que je n'ai pas assez pratiqué cette
        technologie. Une note proche de 5 indique que je suis confient dans mes
        capacités à utiliser la technologie avec succès dans un projet
        d'entreprise.
      </div>
      <div class="container is-narrow">
        <!--  -->
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-4">
            <div class="tile is-horizontal is-parent">
              <div class="tile is-child">
                <desn-skill-box
                  imageUrl="assets/icons/programmation.png"
                  title="Langages"
                >
                  <desn-skill-list [skills]="languages"></desn-skill-list>
                </desn-skill-box>
              </div>
            </div>
            <div class="tile is-horizontal is-parent">
              <div class="tile is-child">
                <desn-skill-box
                  imageUrl="assets/icons/database.png"
                  title="Bases de données"
                >
                  <desn-skill-list [skills]="databases"> </desn-skill-list>
                </desn-skill-box>
              </div>
            </div>
          </div>

          <div class="tile is-vertical">
            <div class="tile is-horizontal is-parent">
              <div class="tile is-child">
                <desn-skill-box
                  imageUrl="assets/icons/framework.png"
                  title="Frameworks"
                >
                  <desn-skill-list [skills]="frameworks"></desn-skill-list>
                </desn-skill-box>
              </div>
            </div>

            <div class="tile is-horizontal is-parent">
              <div class="tile is-child">
                <desn-skill-box
                  imageUrl="assets/icons/agile.png"
                  title="Méthodologies"
                >
                  <desn-skill-list [skills]="methodologies"></desn-skill-list>
                </desn-skill-box>
              </div>
            </div>

            <div class="tile is-horizontal is-parent">
              <div class="tile is-child">
                <desn-skill-box
                  imageUrl="assets/icons/devops.png"
                  title="DevOps"
                >
                  <desn-skill-list [skills]="devops"></desn-skill-list>
                </desn-skill-box>
              </div>
            </div>
          </div>

          <div class="tile is-vertical">
            <div class="tile is-horizontal is-parent">
              <div class="tile is-child">
                <desn-skill-box
                  imageUrl="assets/icons/ux-interface.png"
                  title="Librairies"
                >
                  <desn-skill-list [skills]="librairies"></desn-skill-list>
                </desn-skill-box>
              </div>
            </div>

            <div class="tile is-horizontal is-parent">
              <div class="tile is-child">
                <desn-skill-box
                  imageUrl="assets/icons/tools-and-utensils.png"
                  title="Logiciels"
                >
                  <desn-skill-list [skills]="softwares"></desn-skill-list>
                </desn-skill-box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
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
