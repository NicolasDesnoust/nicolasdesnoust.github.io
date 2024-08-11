import { ContactMessage } from "./contact-message";

export interface MailSender {
  sendContactMail(message: ContactMessage): Promise<void>;
}
