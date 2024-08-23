import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { Observable, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Project } from '../../../core/model/project';
import { SecuredExternalLinkDirective } from '../../directives/secured-external-link.directive';
import { QuickOverviewComponent } from '../quick-overview/quick-overview.component';

@Component({
  selector: 'desn-project-detail',
  standalone: true,
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  imports: [
    CommonModule,
    MarkdownModule,
    QuickOverviewComponent,
    SecuredExternalLinkDirective,
  ],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  selectedProject$: Observable<Project | null> | undefined;
  projectContent$: Observable<any> | undefined;

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer.addClass(
      this.document.getElementsByTagName('html')[0],
      'hide-scrollbars'
    );
  }

  ngOnInit(): void {
    const projects$: Observable<Project[]> = this.route.data.pipe(
      map((data) => data['projects'] || [])
    );
    this.projectContent$ = this.route.data.pipe(
      map((data) => data['projectContent'] || '')
    );

    const selectedProjectId$ = this.route.params.pipe(
      map((params) => params['projectId']),
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
      this.document.getElementsByTagName('html')[0],
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
