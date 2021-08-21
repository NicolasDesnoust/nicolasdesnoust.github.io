import { Component, Input } from '@angular/core';

import { Project } from '../../../home/model/project';

@Component({
  selector: 'desn-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project: Project | null = null;
  shouldShowProjectDetails: boolean = false;

  showProjectDetails() {
    this.shouldShowProjectDetails = true;
  }

  hideProjectDetails() {
    this.shouldShowProjectDetails = false;
  }
}
