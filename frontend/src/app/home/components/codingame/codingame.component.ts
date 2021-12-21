import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Puzzle } from '../../../core/model/puzzle';

@Component({
  selector: 'desn-codingame',
  templateUrl: './codingame.component.html',
})
export class CodingameComponent implements OnInit {
  featuredPuzzles$: Observable<Puzzle[]> | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.featuredPuzzles$ = this.route.data.pipe(
      map((data) => data.featuredPuzzles || [])
    );
  }

  showPuzzleDetails(puzzle: Puzzle) {
    this.router.navigate([`/home/puzzles/${puzzle.id}`]);
  }
}
