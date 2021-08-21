import { Image } from "./image";

export interface Project {
  title: string;
  subtitle: string;
  image?: Image;
  content: string;

  slidesUrl?: string;
  sourceCodeUrl?: string;
}
