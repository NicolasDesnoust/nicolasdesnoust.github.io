import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Puzzle } from 'src/app/core/model/puzzle';

@Component({
  selector: 'desn-puzzle-card',
  templateUrl: './puzzle-card.component.html',
  styleUrls: ['./puzzle-card.component.scss'],
})
export class PuzzleCardComponent {
  @Input() puzzle: Puzzle | null = null;
  @Output() viewMoreButtonClicked = new EventEmitter<void>();
}
