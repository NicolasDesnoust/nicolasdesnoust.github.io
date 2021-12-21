package io.github.nicolasdesnoust.lambda.contact;

import java.nio.charset.StandardCharsets;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailServiceClientBuilder;
import com.amazonaws.services.simpleemail.model.Body;
import com.amazonaws.services.simpleemail.model.Content;
import com.amazonaws.services.simpleemail.model.Destination;
import com.amazonaws.services.simpleemail.model.Message;
import com.amazonaws.services.simpleemail.model.SendEmailRequest;

import io.vavr.control.Either;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AwsMailSender implements MailSender {

    static final String FROM = "desnoust.nicolas451@gmail.com";
    static final Destination TO = new Destination().withToAddresses(FROM);
    static final String UTF8_CHARSET = StandardCharsets.UTF_8.name();

    static AmazonSimpleEmailService client = AmazonSimpleEmailServiceClientBuilder.standard()
            .withRegion(Regions.EU_WEST_3)
            .build();

    private final MessageFormatter messageFormatter;

    @Override
    public Either<MailSendingFailure, MailSendingSuccess> sendContactMail(ContactMessage message) {
        try {
            unsafeSendContactMail(message);
        } catch (Exception ex) {
            ex.printStackTrace();
            return Either.left(new MailSendingFailure("The email was not sent. Error message: " + ex.toString()));
        }
        return Either.right(new MailSendingSuccess("Email sent!"));
    }

    private void unsafeSendContactMail(ContactMessage contactMessage) {
        Message message = new Message()
                .withBody(new Body()
                        .withHtml(new Content()
                                .withCharset(UTF8_CHARSET).withData(messageFormatter.formatMessageAsHtml(contactMessage)))
                        .withText(new Content()
                                .withCharset(UTF8_CHARSET).withData(messageFormatter.formatMessageAsText(contactMessage))))
                .withSubject(new Content()
                        .withCharset(UTF8_CHARSET).withData(contactMessage.getSubject()));

        SendEmailRequest request = new SendEmailRequest()
                .withSource(FROM)
                .withDestination(TO)
                .withMessage(message);

        client.sendEmail(request);
    }
}
