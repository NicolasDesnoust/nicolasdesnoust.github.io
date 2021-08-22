import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/core/model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http
      .get<Project[]>(this.projectsUrl)
      .pipe(map((projects) => this.replaceMissingImages(projects)));
  }

  replaceMissingImages(projects: Project[]) {
    for (let project of projects) {
      if (!project.image) {
        project.image = {
          folder: 'defaultbanner',
          widths: [200, 727, 944, 1082, 1254, 1383, 1392, 1400],
        };
      }
    }

    return projects;
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.getProjects().pipe(
      map((projects) => this.keepFeaturedProjects(projects))
    );
  }

  keepFeaturedProjects(projects: Project[]): Project[] {
    const sett: Set<string> = new Set([
      'dassault-aviation',
      'adm',
      'xyz-ingenierie',
      'marble-wars',
    ]);
    return projects.filter((project) => sett.has(project.image!.folder));
  }
}
