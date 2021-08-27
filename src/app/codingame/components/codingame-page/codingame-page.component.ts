import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { Puzzle } from 'src/app/core/model/puzzle';

@Component({
  selector: 'desn-codingame-page',
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
})
export class CodingamePageComponent implements OnInit {
  puzzles$: Observable<Puzzle[]> | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.puzzles$ = this.route.data.pipe(map((data) => data.puzzles));
  }

  showPuzzleDetails(puzzle: Puzzle) {
    this.router.navigate([`/codingame/puzzles/${puzzle.id}`]);
  }
}
