import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Project } from '../../../core/model/project';

declare var Atropos: any;

@Component({
  selector: 'desn-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements AfterViewInit {
  @Input() project: Project | null = null;
  @Output() viewMoreButtonClicked = new EventEmitter<void>();

  @ViewChild('atropos') private atropos: ElementRef | undefined;

  ngAfterViewInit(): void {
    const _myAtropos = Atropos({
      el: this.atropos?.nativeElement,
      highlight: false,
    });
  }
}
