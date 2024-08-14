import { Injectable } from '@angular/core';
import { projectsData } from '../../data/projects';
import { Image } from '../model/image';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly missingImagePlaceholder: Image = {
    folder: 'defaultbanner',
    backgroundColor: '#131c29',
    layers: [
      {
        widths: [200, 727, 944, 1082, 1254, 1383, 1392, 1400],
        offset: -5,
        extension: 'jpg',
      },
    ],
  };

  private readonly featuredProjectIds = new Set([
    'dassault-aviation',
    'adm',
    'xyz-ingenierie',
    'wordsearch',
  ]);

  getProjects(): Project[] {
    return this.replaceMissingImages(projectsData);
  }

  private replaceMissingImages(projects: Project[]) {
    for (let project of projects) {
      if (!project.image) {
        project.image = this.missingImagePlaceholder;
      }
    }

    return projects;
  }

  getFeaturedProjects(): Project[] {
    return this.keepFeaturedProjects(this.getProjects());
  }

  private keepFeaturedProjects(projects: Project[]): Project[] {
    return projects.filter((project) =>
      this.featuredProjectIds.has(project.id)
    );
  }
}
