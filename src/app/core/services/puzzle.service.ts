import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Puzzle } from 'src/app/home/model/puzzle';

@Injectable({
  providedIn: 'root',
})
export class PuzzleService {
  private puzzlesUrl = 'assets/data/puzzles.json';

  constructor(private http: HttpClient) {}

  getPuzzles(): Observable<Puzzle[]> {
    return this.http
      .get<Puzzle[]>(this.puzzlesUrl)
      .pipe(map((puzzles) => this.replaceMissingImages(puzzles)));
  }

  replaceMissingImages(puzzles: Puzzle[]) {
    for (let puzzle of puzzles) {
      if (!puzzle.image) {
        puzzle.image = {
          folder: 'defaultbanner',
          widths: [200, 727, 944, 1082, 1254, 1383, 1392, 1400],
        };
      }
    }

    return puzzles;
  }

  getFeaturedPuzzles(): Observable<Puzzle[]> {
    return this.getPuzzles().pipe(
      map((puzzles) => this.keepFeaturedPuzzles(puzzles))
    );
  }

  keepFeaturedPuzzles(puzzles: Puzzle[]): Puzzle[] {
    const sett: Set<string> = new Set([
      'marslander3',
      'winamax',
      'labyrinthe',
      'powerofthor2',
    ]);
    return puzzles.filter((puzzle) => sett.has(puzzle.image!.folder));
  }
}
