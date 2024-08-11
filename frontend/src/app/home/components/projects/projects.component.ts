import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectCardComponent } from 'frontend/src/app/shared/components/project-card/project-card.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../../../core/model/project';

@Component({
  selector: 'desn-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports: [CommonModule, ProjectCardComponent, RouterLink],
})
export class ProjectsComponent implements OnInit {
  featuredProjects$: Observable<Project[]> | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.featuredProjects$ = this.route.data.pipe(
      map((data) => data['featuredProjects'] || [])
    );
  }

  showProjectDetails(project: Project) {
    this.router.navigate([`/home/projects/${project.id}`]);
  }
}
