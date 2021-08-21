import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/core/services/projects.service';
import { Project } from 'src/app/core/model/project';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projects$ = this.route.data.pipe(map((data) => data.projects || []));
  }
}
