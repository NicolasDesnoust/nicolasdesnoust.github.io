import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.projects$ = this.route.data.pipe(map((data) => data.projects || []));
  }

  showProjectDetails(project: Project) {
    this.router.navigate([`/projects/${project.id}`]);
  }

  hideProjectDetails() {
    this.router.navigate(['/projects']);
  }
}
