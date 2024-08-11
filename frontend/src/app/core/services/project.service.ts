import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from '../model/image';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projectsUrl = 'data/projects.json';

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

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http
      .get<Project[]>(this.projectsUrl)
      .pipe(map((projects) => this.replaceMissingImages(projects)));
  }

  private replaceMissingImages(projects: Project[]) {
    for (let project of projects) {
      if (!project.image) {
        project.image = this.missingImagePlaceholder;
      }
    }

    return projects;
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.getProjects().pipe(
      map((projects) => this.keepFeaturedProjects(projects))
    );
  }

  private keepFeaturedProjects(projects: Project[]): Project[] {
    return projects.filter((project) =>
      this.featuredProjectIds.has(project.id)
    );
  }
}
