import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Puzzle } from 'src/app/core/model/puzzle';
import { PuzzleService } from 'src/app/core/services/puzzle.service';

@Injectable({
  providedIn: 'root',
})
export class PuzzleResolver implements Resolve<Puzzle[]> {
  constructor(private puzzleService: PuzzleService) {}

  resolve(): Observable<Puzzle[]> {
    return this.puzzleService.getPuzzles();
  }
}
