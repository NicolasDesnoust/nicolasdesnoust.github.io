import { Image } from "./image";

export interface Puzzle {
  id: string;
  title: string;
  subtitle: string;
  image?: Image;
  content: string;

  difficultyColor?: string;
  subjectUrl?: string;
  sourceCodeUrl?: string;
}
