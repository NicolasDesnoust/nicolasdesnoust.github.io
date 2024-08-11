import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Puzzle } from 'frontend/src/app/core/model/puzzle';
import { MarkdownModule } from 'ngx-markdown';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuickOverviewComponent } from '../quick-overview/quick-overview.component';

@Component({
  selector: 'desn-puzzle-detail',
  standalone: true,
  templateUrl: './puzzle-detail.component.html',
  styleUrls: ['./puzzle-detail.component.scss'],
  imports: [CommonModule, MarkdownModule, QuickOverviewComponent],
})
export class PuzzleDetailComponent implements OnInit, OnDestroy {
  selectedPuzzle$: Observable<Puzzle | null> | undefined;
  puzzleContent$: Observable<any> | undefined;

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
    const puzzles$: Observable<Puzzle[]> = this.route.data.pipe(
      map((data) => data['puzzles'] || [])
    );
    this.puzzleContent$ = this.route.data.pipe(
      map((data) => data['puzzleContent'] || '')
    );

    const selectedPuzzleId$ = this.route.params.pipe(
      map((params) => params['puzzleId'])
    );

    this.selectedPuzzle$ = combineLatest([puzzles$, selectedPuzzleId$]).pipe(
      map(
        ([puzzles, selectedPuzzleId]) =>
          puzzles.find((puzzle) => puzzle.id === selectedPuzzleId) || null
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
    this.hidePuzzleDetails();
  }

  hidePuzzleDetails() {
    this.router.navigate(['.'], { relativeTo: this.route.parent });
  }
}
