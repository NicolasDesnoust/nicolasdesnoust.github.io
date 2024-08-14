import { Injectable } from '@angular/core';
import { puzzlesData } from '../../data/puzzles';
import { Puzzle } from '../model/puzzle';

@Injectable({
  providedIn: 'root',
})
export class PuzzleService {
  private readonly missingImagePlaceholder = {
    folder: 'defaultbanner',
    backgroundColor: '#131c29',
    layers: [
      {
        widths: [200, 727, 944, 1082, 1254, 1383, 1392, 1400],
        offset: -5,
        extension: 'jpg',
      },
    ],
  };

  private readonly featuredPuzzleIds = new Set([
    'marslander3',
    'winamax',
    'labyrinthe',
    'powerofthor2',
  ]);

  getPuzzles(): Puzzle[] {
    return this.replaceMissingImages(puzzlesData);
  }

  private replaceMissingImages(puzzles: Puzzle[]) {
    for (let puzzle of puzzles) {
      if (!puzzle.image) {
        puzzle.image = this.missingImagePlaceholder;
      }
    }

    return puzzles;
  }

  getFeaturedPuzzles(): Puzzle[] {
    return this.keepFeaturedPuzzles(this.getPuzzles());
  }

  private keepFeaturedPuzzles(puzzles: Puzzle[]): Puzzle[] {
    return puzzles.filter((puzzle) => this.featuredPuzzleIds.has(puzzle.id));
  }
}
