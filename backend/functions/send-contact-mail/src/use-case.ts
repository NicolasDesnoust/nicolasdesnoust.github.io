import { SendContactMailRequest } from "send-contact-mail-api";
import { ContactMessage } from "./domain/contact-message";
import { MailSender } from "./domain/mail-sender";
import { Sender } from "./domain/sender";

export class SendContactMailUseCase {
  constructor(private mailSender: MailSender) {}

  public async sendContactMail(request: SendContactMailRequest): Promise<void> {
    const contactMessage: ContactMessage = new ContactMessage({
      subject: request.subject,
      body: request.body,
      sender: new Sender({
        name: request.sender.name,
        emailAddress: request.sender.emailAddress,
      }),
    });

    await this.mailSender.sendContactMail(contactMessage);
  }
}
