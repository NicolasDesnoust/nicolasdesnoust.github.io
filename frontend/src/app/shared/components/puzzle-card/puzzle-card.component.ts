import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AtroposOptions } from 'atropos';
import { Puzzle } from '../../../core/model/puzzle';
import { SrcsetPipe } from '../../pipes/srcset.pipe';
import { AtroposComponent } from '../atropos/atropos.component';

@Component({
  selector: 'desn-puzzle-card',
  standalone: true,
  templateUrl: './puzzle-card.component.html',
  styleUrls: ['./puzzle-card.component.scss'],
  imports: [CommonModule, AtroposComponent, SrcsetPipe],
})
export class PuzzleCardComponent {
  @Input() puzzle: Puzzle | null = null;
  @Output() viewMoreButtonClicked = new EventEmitter<void>();

  atroposOptions: AtroposOptions;

  constructor() {
    this.atroposOptions = {
      rotateTouch: false,
    };
  }
}
