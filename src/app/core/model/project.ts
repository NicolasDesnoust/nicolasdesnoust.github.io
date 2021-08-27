import { Image } from "./image";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image?: Image;

  slidesUrl?: string;
  applicationUrl?: string;
  sourceCodeUrl?: string;
}
