import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Project } from '../../../core/model/project';

@Component({
  selector: 'desn-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project: Project | null = null;
  @Output() viewMoreButtonClicked = new EventEmitter<void>();
}
