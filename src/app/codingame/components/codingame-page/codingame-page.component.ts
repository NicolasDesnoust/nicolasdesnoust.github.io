import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PuzzleService } from 'src/app/core/services/puzzle.service';
import { Project } from 'src/app/home/model/project';
import { Puzzle } from 'src/app/home/model/puzzle';

@Component({
  selector: 'desn-codingame-page',
  templateUrl: './codingame-page.component.html',
  styleUrls: ['./codingame-page.component.scss'],
})
export class CodingamePageComponent implements OnInit {

  puzzles$: Observable<Puzzle[]> | undefined;

  constructor(private puzzleService: PuzzleService) {}

  ngOnInit(): void {
    this.puzzles$ = this.puzzleService.getPuzzles();
  }
}
