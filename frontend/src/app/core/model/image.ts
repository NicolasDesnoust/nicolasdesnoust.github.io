export interface Image {
  folder: string;
  layers: Array<{
    widths: number[];
    offset: number;
    extension: string;
  }>
  backgroundColor: string;
}
