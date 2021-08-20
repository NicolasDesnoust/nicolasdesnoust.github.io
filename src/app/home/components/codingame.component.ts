import { Component, OnInit } from '@angular/core';
import { Project } from "../model/project";

@Component({
  selector: 'desn-codingame',
  template: `
    <section class="section is-medium has-text-centered">
      <h1 class="title is-spaced">Codingame</h1>
      <h2 class="subtitle">
        La plateforme <a>Codingame</a> permet aux recruteurs d'évaluer les
        candidats à des postes de développeur. Mais pas que ! Elle permet
        également aux développeurs du monde entier de s'entrainer en résolvant
        des puzzles de difficulté croissante ou de s'affronter dans des duels
        d'intelligences artificielles.
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
        <span>Voir plus de puzzles</span>
      </a>
    </section>
  `,
  styles: [],
})
export class CodingameComponent implements OnInit {
  project1: Project = {
    title: 'Mars Lander 3',
    subtitle: 'Puzzle très difficile',
    content: `
      <p>
        L'objectif de ce puzzle est de faire atterrir,
        sans crash, une capsule sur Mars. Le joueur peut
        agir sur l'angle de rotation de la capsule et la
        puissance de ses fusées.
        La solution implémentée se base sur un algorithme génétique
        qui génère un ensemble de trajectoires aléatoires et les raffine
        au fur et à mesure jusqu'à en trouver une optimale.
      </p>
      <span>
        2021
      </span>
    `,
    difficultyColor: '#ea5974',
    imageUrl: 'assets/da.png',
    subjectUrl:
      'https://www.codingame.com/training/expert/mars-lander-episode-3',
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/MarsLander',
  };

  project2: Project = {
    title: 'Winamax Sponsored Challenge',
    subtitle: 'Puzzle difficile',
    content: `
      <p>
        L'objectif de ce challenge est d'écrire un programme capable de
        simuler les coups à effectuer sur un parcours de golf afin d'économiser
        au mieux le temps et l'effort à dépenser pendant la partie.
        La solution implémentée se base sur un algorithme de Back-tracking
        qui parcours l'espace des solutions candidates de manière optimisée.
      </p>
      <span>
        Décembre 2019 - Avril 2020
      </span>
    `,
    difficultyColor: 'rgb(234, 143, 89)',
    imageUrl: 'assets/amu.png',
    subjectUrl:
      'https://www.codingame.com/training/hard/winamax-sponsored-contest',
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/ADM',
  };

  project3: Project = {
    title: 'Le labyrinthe',
    subtitle: 'Puzzle difficile',
    content: `
      <p>
        L'objectif de ce puzzle est de déplacer un personnage dans un labyrinthe en 2D
        jusqu'à une case donnée et de le faire revenir à son point de départ
        en ayant un nombre de mouvement limités. La carte est également masquée, seules les
        cases autour du personnage sont visibles. La solution implémentée est une variante
        du parcours en largeur de graphes.
      </p>
      <span>
        <i class="fas fa-tools"></i>
      </span>
      En développement
  `,
    difficultyColor: 'rgb(234, 143, 89)',
    imageUrl: 'assets/xyz.png',
    subjectUrl: 'https://www.codingame.com/training/hard/the-labyrinth',
    sourceCodeUrl:
      'https://github.com/NicolasDesnoust/XYZ-ANGULAR-STJ-ILD-DESNOUST-LY',
  };

  project4: Project = {
    title: 'Power of Thor 2',
    subtitle: 'Puzzle difficile',
    content: `
      <p>
        L'objectif de ce puzzle est d'anéantir des géants sur une carte en 2D
        en controlant un personnage qui peut envoyer des eclairs autour de lui.
        Le nombre d'éclairs étant limité, la solution implémentée cherche à se rendre
        au barycentre des géants et à n'envoyer des éclairs que lorsque le personnage
        se retrouve pris au piège par les géants.
      </p>
      <span>
        2021
      </span>
  `,
    difficultyColor: 'rgb(234, 143, 89)',
    imageUrl: 'assets/marble-wars.png',
    subjectUrl:
      'https://www.codingame.com/training/hard/power-of-thor-episode-2',
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/MarbleWars',
  };

  constructor() {}

  ngOnInit(): void {}
}
