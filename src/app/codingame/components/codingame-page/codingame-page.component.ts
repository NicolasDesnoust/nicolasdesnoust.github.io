import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PuzzleService } from 'src/app/core/services/puzzle.service';
import { Project } from 'src/app/core/model/project';
import { Puzzle } from 'src/app/core/model/puzzle';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.puzzles$ = this.route.data.pipe(map((data) => data.puzzles));
  }
}
