import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PuzzleCardComponent } from 'frontend/src/app/shared/components/puzzle-card/puzzle-card.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Puzzle } from '../../../core/model/puzzle';

@Component({
  selector: 'desn-codingame',
  standalone: true,
  templateUrl: './codingame.component.html',
  imports: [CommonModule, RouterLink, PuzzleCardComponent],
})
export class CodingameComponent implements OnInit {
  featuredPuzzles$: Observable<Puzzle[]> | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.featuredPuzzles$ = this.route.data.pipe(
      map((data) => data['featuredPuzzles'] || [])
    );
  }

  showPuzzleDetails(puzzle: Puzzle) {
    this.router.navigate([`/home/puzzles/${puzzle.id}`]);
  }
}
