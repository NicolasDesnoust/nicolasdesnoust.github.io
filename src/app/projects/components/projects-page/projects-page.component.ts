import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/core/model/project';

@Component({
  selector: 'desn-projects-page',
  templateUrl: './projects-page.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
    `,
  ],
})
export class ProjectsPageComponent implements OnInit {
  projects$: Observable<Project[]> | undefined;
  selectedProject$: Observable<Project | null> | undefined;
  projectContent$: Observable<any> | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.projects$ = this.route.data.pipe(map((data) => data.projects || []));
    this.projectContent$ = this.route.data.pipe(
      map((data) => data.projectContent || '')
    );

    const selectedProjectId$ = this.route.params.pipe(
      map((params) => params.projectId)
    );

    this.selectedProject$ = combineLatest([
      this.projects$,
      selectedProjectId$,
    ]).pipe(
      map(
        ([projects, selectedProjectId]) =>
          projects.find(
            (project) => project.image?.folder === selectedProjectId
          ) || null
      )
    );
  }

  showProjectDetails(project: Project) {
    this.router.navigate([`/projects/${project.id}`]);
  }

  hideProjectDetails() {
    this.router.navigate(['/projects']);
  }
}
