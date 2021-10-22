import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Puzzle } from 'src/app/core/model/puzzle';

declare var Atropos: any;

@Component({
  selector: 'desn-puzzle-card',
  templateUrl: './puzzle-card.component.html',
  styleUrls: ['./puzzle-card.component.scss'],
})
export class PuzzleCardComponent implements AfterViewInit {
  @Input() puzzle: Puzzle | null = null;
  @Output() viewMoreButtonClicked = new EventEmitter<void>();

  @ViewChild('atropos') private atropos: ElementRef | undefined;

  ngAfterViewInit(): void {
    const _myAtropos = Atropos({
      el: this.atropos?.nativeElement,
      rotateTouch: 'scroll-y'
    });
  }
}
