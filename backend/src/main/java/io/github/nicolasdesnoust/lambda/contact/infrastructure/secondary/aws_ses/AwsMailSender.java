package io.github.nicolasdesnoust.lambda.contact.infrastructure.secondary.aws_ses;

import io.github.nicolasdesnoust.lambda.contact.domain.ContactMessage;
import io.github.nicolasdesnoust.lambda.contact.domain.MailSender;
import io.github.nicolasdesnoust.lambda.contact.domain.MessageFormatter;
import lombok.RequiredArgsConstructor;
import software.amazon.awssdk.core.exception.SdkException;
import software.amazon.awssdk.services.ses.SesClient;
import software.amazon.awssdk.services.ses.model.Body;
import software.amazon.awssdk.services.ses.model.Content;
import software.amazon.awssdk.services.ses.model.Destination;
import software.amazon.awssdk.services.ses.model.Message;
import software.amazon.awssdk.services.ses.model.SendEmailRequest;

import java.nio.charset.StandardCharsets;

@RequiredArgsConstructor
public class AwsMailSender implements MailSender {

    static final String FROM = "desnoust.nicolas451@gmail.com";
    static final Destination TO = Destination.builder().toAddresses(FROM).build();
    static final String UTF8_CHARSET = StandardCharsets.UTF_8.name();

    private final SesClient sesClient;
    private final MessageFormatter messageFormatter;

    @Override
    public void sendContactMail(ContactMessage message) {
        try {
            unsafeSendContactMail(message);
        } catch (SdkException exception) {
            throw new MailSendingException("The email was not sent.", exception);
        }
    }

    private void unsafeSendContactMail(ContactMessage contactMessage) {
        Message amazonMessage = toAmazonMessage(contactMessage);

        SendEmailRequest request = SendEmailRequest.builder()
                .source(FROM)
                .destination(TO)
                .message(amazonMessage)
                .build();

        sesClient.sendEmail(request);
    }

    private Message toAmazonMessage(ContactMessage contactMessage) {
        return Message.builder()
                .body(Body.builder()
                        .html(Content.builder()
                                .charset(UTF8_CHARSET)
                                .data(messageFormatter.formatMessageAsHtml(contactMessage))
                                .build())
                        .text(Content.builder()
                                .charset(UTF8_CHARSET)
                                .data(messageFormatter.formatMessageAsText(contactMessage))
                                .build())
                        .build()
                )
                .subject(Content.builder()
                        .charset(UTF8_CHARSET)
                        .data(contactMessage.getSubject())
                        .build())
                .build();
    }
}
