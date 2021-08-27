import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Puzzle } from '../../core/model/puzzle';

@Component({
  selector: 'desn-codingame',
  template: `
    <section class="section is-medium has-text-centered">
      <h1 class="title is-spaced">Codingame</h1>
      <h2 class="subtitle">
        La plateforme <a>Codingame</a> permet aux recruteurs d'évaluer les
        candidats à des postes de développeur. Mais pas que ! Elle permet
        également aux développeurs du monde entier de s'entrainer en résolvant
        des puzzles de difficulté croissante ou de s'affronter dans des duels
        d'intelligences artificielles.
      </h2>

      <div
        class="columns is-multiline is-centered"
        *ngIf="featuredPuzzles$ | async as featuredPuzzles"
      >
        <div
          class="column
          is-full-mobile
        is-half-tablet
        is-half-desktop
        is-one-third-widescreen
        is-one-quarter-fullhd"
          *ngFor="let featuredPuzzle of featuredPuzzles"
        >
          <desn-puzzle-card
            [puzzle]="featuredPuzzle"
            (viewMoreButtonClicked)="showPuzzleDetails(featuredPuzzle)"
          ></desn-puzzle-card>
        </div>
      </div>
      <a [routerLink]="['/codingame']" class="button is-primary mt-3">
        <span>Voir plus de puzzles</span>
      </a>
    </section>
  `,
  styles: [],
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
