import { Component, OnInit } from '@angular/core';

export interface Project {
  title: string;
  subtitle: string;
  imageUrl: string;
  content: string;
  difficultyColor?: string;
  previewUrl?: string;
  slidesUrl?: string;
  subjectUrl?: string;
  sourceCodeUrl?: string;
}

@Component({
  selector: 'desn-projects',
  template: `
    <section class="section is-medium has-text-centered">
      <h1 id="projets" class="title is-spaced">Projets récents</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>,
        like the one you're currently reading.
      </h2>
      <div class="columns">
        <div class="column">
          <desn-project-card [project]="project1"></desn-project-card>
        </div>
        <div class="column">
          <desn-project-card [project]="project2"></desn-project-card>
        </div>
        <div class="column">
          <desn-project-card [project]="project3"></desn-project-card>
        </div>
        <div class="column">
          <desn-project-card [project]="project4"></desn-project-card>
        </div>
      </div>
      <a href="#" class="button is-primary mt-3">
        <span>Voir plus de projets</span>
      </a>
    </section>
  `,
  styles: [],
})
export class ProjectsComponent implements OnInit {
  project1: Project = {
    title: "Prototype d'une plateforme IoT",
    subtitle: 'Dassault Aviation',
    content: `
      Stage de fin d’études chez Dassault Aviation. Étude d’un backend NodeJS (Kuzzle) puis développement d’un POC d’une plateforme IoT (extension du backend et développement d’une application métier sous Angular). L’objectif étant d’être en capacité de manipuler et restituer des données en provenance de capteurs de température, en anticipant le support d’autres cas d’usage (ex. géolocalisation).
      <br />
      Étude en parralèle de Docker, Elasticsearch/Kibana, Grafana et Redis.
      <br />
      <span class="pt-4">
        Avril 2020 - Octobre 2020
      </span>
    `,
    imageUrl: 'assets/da.png',
    slidesUrl:
      'https://docs.google.com/presentation/d/1sY2yfRRpKNHQpLEjeZqc0j6lynSN4_o8/edit?usp=sharing&ouid=110983295053167197060&rtpof=true&sd=true',
  };

  project2: Project = {
    title: 'Atelier des métiers',
    subtitle: 'Aix-Marseille Université',
    content: `
      Développement d’une API REST et d’une Single Page Application pour la faculté des Sciences d’Aix-Marseille.
      Permet aux étudiants de trouver des métiers atteignables selon différents critères.
      <br />
      <span class="pt-4">
        Décembre 2019 - Avril 2020
      </span>
    `,
    imageUrl: 'assets/amu.png',
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/ADM',
  };

  project3: Project = {
    title: 'XYZ Ingéniérie',
    subtitle: 'Projet personnel',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
    iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
    <a href="#">#responsive</a>
    <br />
    <span class="icon pt-4">
      <i class="fas fa-tools"></i>
    </span>
    En développement
  `,
    imageUrl: 'assets/xyz.png',
    sourceCodeUrl:
      'https://github.com/NicolasDesnoust/XYZ-ANGULAR-STJ-ILD-DESNOUST-LY',
  };

  project4: Project = {
    title: 'Marble Wars',
    subtitle: 'Projet encadré',
    content: `
    Développement d’un jeu dans le style de “Zuma Revenge”.
    Création d’interfaces graphiques avec GTK et manipulation de courbes de Bézier.
    <br />
    <span class="pt-4">
      2017
    </span>
  `,
    imageUrl: 'assets/marble-wars.png',
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/MarbleWars',
  };

  constructor() {}

  ngOnInit(): void {}
}
