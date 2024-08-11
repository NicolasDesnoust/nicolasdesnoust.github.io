import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../../core/model/project';
import { ProjectService } from '../../core/services/project.service';

@Injectable({
  providedIn: 'root',
})
export class FeaturedProjectsResolver implements Resolve<Project[]> {
  constructor(private projectService: ProjectService) {}

  resolve(): Observable<Project[]> {
    return this.projectService.getFeaturedProjects();
  }
}
