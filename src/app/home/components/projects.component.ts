import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/core/services/projects.service';
import { Project } from '../model/project';

@Component({
  selector: 'desn-projects',
  template: `
    <section class="section is-medium has-text-centered">
      <h1 id="projets" class="title is-spaced">Projets récents</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>,
        like the one you're currently reading.
      </h2>
      <div
        class="columns is-multiline is-centered"
        *ngIf="featuredProjects$ | async as featuredProjects"
      >
        <div
          class="column
                 is-full-mobile
                 is-half-tablet
                 is-half-desktop
                 is-one-third-widescreen
                 is-one-quarter-fullhd"
          *ngFor="let featuredProject of featuredProjects">
          <desn-project-card [project]="featuredProject"></desn-project-card>
        </div>
      </div>
      <a [routerLink]="['projects']" class="button is-primary mt-3">
        <span>Voir plus de projets</span>
      </a>
    </section>
  `,
  styles: [],
})
export class ProjectsComponent implements OnInit {
  featuredProjects$: Observable<Project[]> | undefined;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.featuredProjects$ = this.projectService.getFeaturedProjects();
  }
}
