import { SendContactMailRequest } from "@ndesnoust/send-contact-mail-api";
import { ContactMessage } from "./domain/contact-message";
import { HumanVerifier } from "./domain/human-verifier";
import { MailSender } from "./domain/mail-sender";
import { Sender } from "./domain/sender";

export class SendContactMailUseCase {
  constructor(
    private humanVerifier: HumanVerifier,
    private mailSender: MailSender
  ) {}

  public async sendContactMail(request: SendContactMailRequest): Promise<void> {
    await this.humanVerifier.verify(request.turnstileToken);

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
