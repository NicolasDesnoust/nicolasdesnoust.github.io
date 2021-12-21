import { Image } from "./image";
import { QuickOverview } from "./quick-overview";

export interface Puzzle {
  id: string;
  title: string;
  subtitle: string;
  image?: Image;
  content: string;

  difficultyColor?: string;
  subjectUrl?: string;
  sourceCodeUrl?: string;

  quickOverview?: QuickOverview;
}
