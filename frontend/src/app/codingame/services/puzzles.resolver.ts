import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Puzzle } from '../../core/model/puzzle';
import { PuzzleService } from '../../core/services/puzzle.service';

export const puzzlesResolver: ResolveFn<Puzzle[]> = (): Puzzle[] => {
  const puzzleService = inject(PuzzleService);
  return puzzleService.getPuzzles();
};
