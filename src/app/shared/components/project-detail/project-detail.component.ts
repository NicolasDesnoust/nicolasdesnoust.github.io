import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isScullyRunning } from '@scullyio/ng-lib';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Project } from 'src/app/core/model/project';

@Component({
  selector: 'desn-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  selectedProject$: Observable<Project | null> | undefined;
  projectContent$: Observable<any> | undefined;
  isScullyRunning: boolean = isScullyRunning();

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.renderer.addClass(
      document.getElementsByTagName('html')[0],
      'hide-scrollbars'
    );
  }

  ngOnInit(): void {
    const projects$: Observable<Project[]> = this.route.data.pipe(
      map((data) => data.projects || [])
    );
    this.projectContent$ = this.route.data.pipe(
      map((data) => data.projectContent || '')
    );

    const selectedProjectId$ = this.route.params.pipe(
      map((params) => params.projectId),
      tap((e) => console.log(e))
    );

    this.selectedProject$ = combineLatest([projects$, selectedProjectId$]).pipe(
      map(
        ([projects, selectedProjectId]) =>
          projects.find(
            (project) => project.image?.folder === selectedProjectId
          ) || null
      )
    );
  }

  ngOnDestroy() {
    this.renderer.removeClass(
      document.getElementsByTagName('html')[0],
      'hide-scrollbars'
    );
  }

  onError() {
    this.hideProjectDetails();
  }

  hideProjectDetails() {
    this.router.navigate(['.'], { relativeTo: this.route.parent });
  }
}
