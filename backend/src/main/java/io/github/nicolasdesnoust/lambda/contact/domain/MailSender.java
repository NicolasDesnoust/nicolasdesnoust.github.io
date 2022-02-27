package io.github.nicolasdesnoust.lambda.contact.domain;

public interface MailSender {

    void sendContactMail(ContactMessage message);

    class MailSendingException extends RuntimeException {

        public MailSendingException(String message, Throwable cause) {
            super(message, cause);
        }
    }

}