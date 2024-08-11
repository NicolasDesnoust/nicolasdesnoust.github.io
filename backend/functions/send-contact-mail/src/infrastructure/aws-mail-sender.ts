import {
  SESClient,
  SendEmailCommand,
  SendEmailCommandInput,
} from "@aws-sdk/client-ses";
import { ContactMessage } from "../domain/contact-message";
import { MailSender } from "../domain/mail-sender";
import { MailSendingError } from "../domain/mail-sending-error";
import { MessageFormatter } from "../domain/message-formatter";

export class AwsMailSender implements MailSender {
  private readonly ownEmail = "desnoust.nicolas451@gmail.com";

  constructor(
    private sesClient: SESClient,
    private messageFormatter: MessageFormatter
  ) {}

  public async sendContactMail(message: ContactMessage): Promise<void> {
    try {
      await this.unsafeSendContactMail(message);
    } catch (error) {
      throw new MailSendingError("Error: the email could not be sent.", error);
    }
  }

  private async unsafeSendContactMail(
    contactMessage: ContactMessage
  ): Promise<void> {
    const params: SendEmailCommandInput = {
      Destination: {
        ToAddresses: [this.ownEmail],
      },
      Message: {
        Body: {
          Html: {
            Data: this.messageFormatter.formatMessageAsHtml(contactMessage),
          },
          Text: {
            Data: this.messageFormatter.formatMessageAsText(contactMessage),
          },
        },
        Subject: {
          Data: contactMessage.subject,
        },
      },
      Source: this.ownEmail
    };

    const command = new SendEmailCommand(params);

    await this.sesClient.send(command);
  }
}
