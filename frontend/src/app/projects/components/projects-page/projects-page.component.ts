import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Project } from 'frontend/src/app/core/model/project';
import { ProjectCardComponent } from 'frontend/src/app/shared/components/project-card/project-card.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'desn-projects-page',
  standalone: true,
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
  imports: [CommonModule, RouterOutlet, ProjectCardComponent],
})
export class ProjectsPageComponent implements OnInit {
  projects$: Observable<Project[]> | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.projects$ = this.route.data.pipe(
      map((data) => data['projects'] || [])
    );
  }

  showProjectDetails(project: Project) {
    this.router.navigate([`/projects/${project.id}`]);
  }

  hideProjectDetails() {
    this.router.navigate(['/projects']);
  }
}
