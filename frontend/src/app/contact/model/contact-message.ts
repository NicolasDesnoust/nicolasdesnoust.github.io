import { Sender } from "./sender";

export interface ContactMessage {
  subject: string;
  body: string;
  sender: Sender;
}


