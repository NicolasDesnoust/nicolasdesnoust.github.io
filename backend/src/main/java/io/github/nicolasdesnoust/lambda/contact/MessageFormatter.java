package io.github.nicolasdesnoust.lambda.contact;

public class MessageFormatter {
    // The HTML body for the email.
    public String formatMessageAsHtml(ContactMessage message) {
        return "<h1>" + message.getSubject() + "</h1>"
                + "<p>" + message.getBody() + "</p>"
                + "<p>Ce message a été envoyé par " + message.getSender().getName() + " " + message.getSender().getEmailAddress() + "</p>"
                + "<small>This email was sent with <a href='https://aws.amazon.com/ses/'>"
                + "Amazon SES</a> using the <a href='https://aws.amazon.com/sdk-for-java/'>"
                + "AWS SDK for Java</a></small>";
    }

    // The email body for recipients with non-HTML email clients.
    public String formatMessageAsText(ContactMessage message) {
        return message.getSubject() + '\n' +
                message.getBody() + '\n' +
                "De : " + message.getSender().getName() + '\n' +
                message.getSender().getEmailAddress() + '\n';
    }
}
