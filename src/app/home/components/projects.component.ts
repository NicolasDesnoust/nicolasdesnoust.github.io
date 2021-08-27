import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../../core/model/project';

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
          *ngFor="let featuredProject of featuredProjects"
        >
          <desn-project-card
            [project]="featuredProject"
            (viewMoreButtonClicked)="showProjectDetails(featuredProject)"
          ></desn-project-card>
        </div>
      </div>
      <a [routerLink]="['/projects']" class="button is-primary mt-3">
        <span>Voir plus de projets</span>
      </a>
    </section>
  `,
  styles: [],
})
export class ProjectsComponent implements OnInit {
  featuredProjects$: Observable<Project[]> | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.featuredProjects$ = this.route.data.pipe(
      map((data) => data.featuredProjects || [])
    );
  }

  showProjectDetails(project: Project) {
    this.router.navigate([`/home/projects/${project.id}`]);
  }
}
