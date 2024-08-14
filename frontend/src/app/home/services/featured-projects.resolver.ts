import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Project } from '../../core/model/project';
import { ProjectService } from '../../core/services/project.service';

export const featuredProjectsResolver: ResolveFn<Project[]> = (): Project[] => {
  const projectService = inject(ProjectService);
  return projectService.getFeaturedProjects();
};
