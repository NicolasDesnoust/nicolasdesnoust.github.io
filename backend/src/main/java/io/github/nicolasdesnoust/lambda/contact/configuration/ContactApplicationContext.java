package io.github.nicolasdesnoust.lambda.contact.configuration;

import io.github.nicolasdesnoust.lambda.contact.domain.MailSender;
import io.github.nicolasdesnoust.lambda.contact.domain.MessageFormatter;
import io.github.nicolasdesnoust.lambda.contact.infrastructure.secondary.aws_ses.AwsMailSender;
import io.github.nicolasdesnoust.lambda.contact.usecases.SendContactMailUseCase;
import software.amazon.awssdk.services.ses.SesClient;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Produces;
import javax.validation.Validator;

@ApplicationScoped
public class ContactApplicationContext {

    @Produces
    @ApplicationScoped
    public MailSender mailSender(SesClient sesClient, MessageFormatter messageFormatter) {
        return new AwsMailSender(sesClient, messageFormatter);
    }

    @Produces
    @ApplicationScoped
    public MessageFormatter messageFormatter() {
        return new MessageFormatter();
    }

    @Produces
    @ApplicationScoped
    public SendContactMailUseCase sendContactMailUseCase(MailSender mailSender, Validator validator) {
        return new SendContactMailUseCase(mailSender, validator);
    }
}