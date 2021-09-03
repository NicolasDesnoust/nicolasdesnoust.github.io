import { Image } from "./image";
import { QuickOverview } from "./quick-overview";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image?: Image;

  slidesUrl?: string;
  applicationUrl?: string;
  sourceCodeUrl?: string;

  quickOverview?: QuickOverview;
}
