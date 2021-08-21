import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PuzzleService } from 'src/app/core/services/puzzle.service';
import { Project } from 'src/app/core/model/project';
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

  constructor(private puzzleService: PuzzleService) {}

  ngOnInit(): void {
    this.puzzles$ = this.puzzleService.getPuzzles();
  }
}
