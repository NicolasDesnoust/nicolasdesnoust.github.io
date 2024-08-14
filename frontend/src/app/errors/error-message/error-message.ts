export interface ErrorMessage {
  title: string;
  message: string;
  button: {
    label: string;
    action: () => void;
  };
  image: {
    url: string;
    realWidth: number;
    realHeight: number;
    desiredWidth: number;
  };
}
