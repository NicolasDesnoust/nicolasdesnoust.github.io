import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AtroposOptions } from 'atropos';
import { Project } from '../../../core/model/project';
import { SrcsetPipe } from '../../pipes/srcset.pipe';
import { AtroposComponent } from '../atropos/atropos.component';

@Component({
  selector: 'desn-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [CommonModule, AtroposComponent, SrcsetPipe],
})
export class ProjectCardComponent {
  @Input() project: Project | null = null;
  @Output() viewMoreButtonClicked = new EventEmitter<void>();

  atroposOptions: AtroposOptions;

  constructor() {
    this.atroposOptions = {
      highlight: false,
      rotateTouch: false,
    };
  }
}
