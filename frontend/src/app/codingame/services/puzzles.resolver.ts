import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Puzzle } from '../../core/model/puzzle';
import { PuzzleService } from '../../core/services/puzzle.service';

@Injectable({
  providedIn: 'root',
})
export class PuzzlesResolver implements Resolve<Puzzle[]> {
  constructor(private puzzleService: PuzzleService) {}

  resolve(): Observable<Puzzle[]> {
    return this.puzzleService.getPuzzles();
  }
}
