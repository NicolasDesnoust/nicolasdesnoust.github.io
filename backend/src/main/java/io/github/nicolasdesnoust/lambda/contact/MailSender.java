package io.github.nicolasdesnoust.lambda.contact;

import io.vavr.control.Either;
import lombok.Value;

public interface MailSender {
    Either<MailSendingFailure, MailSendingSuccess> sendContactMail(ContactMessage message);

    @Value
    class MailSendingFailure {
        String reason;
    }

    @Value
    class MailSendingSuccess {
        String message;
    }
}