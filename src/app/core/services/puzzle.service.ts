import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Puzzle } from 'src/app/core/model/puzzle';

@Injectable({
  providedIn: 'root',
})
export class PuzzleService {
  private readonly puzzlesUrl = 'assets/data/puzzles.json';

  private readonly missingImagePlaceholder = {
    folder: 'defaultbanner',
    backgroundColor: '#131c29',
    layers: [
      {
        widths: [200, 727, 944, 1082, 1254, 1383, 1392, 1400],
        offset: -5,
        extension: 'jpg'
      },
    ],
  };

  private readonly featuredPuzzleIds = new Set([
    'marslander3',
    'winamax',
    'labyrinthe',
    'powerofthor2',
  ]);

  constructor(private http: HttpClient) {}

  getPuzzles(): Observable<Puzzle[]> {
    return this.http
      .get<Puzzle[]>(this.puzzlesUrl)
      .pipe(map((puzzles) => this.replaceMissingImages(puzzles)));
  }

  private replaceMissingImages(puzzles: Puzzle[]) {
    for (let puzzle of puzzles) {
      if (!puzzle.image) {
        puzzle.image = this.missingImagePlaceholder;
      }
    }

    return puzzles;
  }

  getFeaturedPuzzles(): Observable<Puzzle[]> {
    return this.getPuzzles().pipe(
      map((puzzles) => this.keepFeaturedPuzzles(puzzles))
    );
  }

  private keepFeaturedPuzzles(puzzles: Puzzle[]): Puzzle[] {
    return puzzles.filter((puzzle) => this.featuredPuzzleIds.has(puzzle.id));
  }
}
