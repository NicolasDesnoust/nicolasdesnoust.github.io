import { ContactMessage } from "./contact-message";

export class MessageFormatter {
  // The HTML body for the email.
  public formatMessageAsHtml(message: ContactMessage): string {
    return (
      "<h1>" +
      message.subject +
      "</h1>" +
      "<p>" +
      message.body +
      "</p>" +
      "<p>Ce message a été envoyé par " +
      message.sender.name +
      " " +
      message.sender.emailAddress +
      "</p>" +
      "<small>This email was sent with <a href='https://aws.amazon.com/ses/'>" +
      "Amazon SES</a> using the <a href='https://aws.amazon.com/fr/sdk-for-javascript/'>" +
      "AWS SDK for Typescript</a></small>"
    );
  }

  // The email body for recipients with non-HTML email clients.
  public formatMessageAsText(message: ContactMessage): string {
    return (
      message.subject +
      "\n" +
      message.body +
      "\n" +
      "De : " +
      message.sender.name +
      "\n" +
      message.sender.emailAddress +
      "\n"
    );
  }
}
