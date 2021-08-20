import { Component, Input, OnInit } from '@angular/core';
import { Project } from './projects.component';

@Component({
  selector: 'desn-project-card',
  template: `
    <div class="card">
      <!-- <div class="card-image">
        <figure class="image is-4by3">
          <img [src]="project?.imageUrl" alt="Placeholder image" />
        </figure>
      </div> -->
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ project?.title }}</p>
            <p class="subtitle is-6">
              <i
                *ngIf="project?.difficultyColor"
                class="fas fa-circle"
                style="color: {{ project?.difficultyColor }}"
              ></i>
              {{ project?.subtitle }}
            </p>
          </div>
        </div>

        <div class="content" [innerHtml]="project?.content"></div>
      </div>

      <footer class="card-footer">
        <a
          [href]="project?.previewUrl"
          *ngIf="project?.previewUrl"
          class="card-footer-item"
        >
          Aperçu
        </a>
        <a
          [href]="project?.slidesUrl"
          *ngIf="project?.slidesUrl"
          class="card-footer-item"
        >
          Présentation
        </a>
        <a
          [href]="project?.subjectUrl"
          *ngIf="project?.subjectUrl"
          class="card-footer-item"
        >
          Sujet
        </a>
        <a
          [href]="project?.sourceCodeUrl"
          *ngIf="project?.sourceCodeUrl"
          class="card-footer-item"
        >
          <!-- <span class="icon">
            <i class="fab fa-github"></i>
          </span> -->
          Code source
        </a>
      </footer>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
      }
    `,
  ],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project | null = null;

  constructor() {}

  ngOnInit(): void {}
}
