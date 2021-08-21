import { Image } from "./image";

export interface Puzzle {
  title: string;
  subtitle: string;
  image?: Image;
  content: string;

  difficultyColor?: string;
  subjectUrl?: string;
  sourceCodeUrl?: string;
}
