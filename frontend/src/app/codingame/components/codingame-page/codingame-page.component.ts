import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router, RouterOutlet } from '@angular/router';
import { Puzzle } from 'frontend/src/app/core/model/puzzle';
import { PuzzleCardComponent } from 'frontend/src/app/shared/components/puzzle-card/puzzle-card.component';
import { SecuredExternalLinkDirective } from 'frontend/src/app/shared/directives/secured-external-link.directive';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'desn-codingame-page',
  standalone: true,
  templateUrl: './codingame-page.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
    `,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    PuzzleCardComponent,
    SecuredExternalLinkDirective,
  ],
})
export class CodingamePageComponent implements OnInit {
  puzzles$: Observable<Puzzle[]> | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.puzzles$ = this.route.data.pipe(
      map<Data, Puzzle[]>((data) => data['puzzles'])
    );
  }

  showPuzzleDetails(puzzle: Puzzle) {
    this.router.navigate([`/codingame/puzzles/${puzzle.id}`]);
  }
}
