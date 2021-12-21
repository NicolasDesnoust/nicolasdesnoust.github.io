import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../../../core/model/project';

@Component({
  selector: 'desn-projects',
  templateUrl: './projects.component.html',
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
