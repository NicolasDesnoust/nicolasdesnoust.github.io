import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/model/project';
import { ProjectService } from 'src/app/core/services/project.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsResolver implements Resolve<Project[]> {
  constructor(private projectService: ProjectService) {}

  resolve(): Observable<Project[]> {
    return this.projectService.getProjects();
  }
}
