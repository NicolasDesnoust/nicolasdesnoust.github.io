package io.github.nicolasdesnoust.lambda.contact.usecases;

import io.github.nicolasdesnoust.lambda.contact.domain.ContactMessage;
import io.github.nicolasdesnoust.lambda.contact.domain.MailSender;
import io.quarkus.runtime.annotations.RegisterForReflection;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import javax.validation.Validator;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Slf4j
@RequiredArgsConstructor
public class SendContactMailUseCase {

    private final MailSender mailSender;
    private final Validator validator;

    public void sendContactMail(SendContactMailRequest request) {

        var violations = validator.validate(request);
        if (!violations.isEmpty()) {
            throw new ConstraintViolationException(violations);
        }

        ContactMessage contactMessage = request.toContactMessage();

        mailSender.sendContactMail(contactMessage);
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @RegisterForReflection
    public static class SendContactMailRequest implements Serializable {

        @NotNull
        @NotBlank
        @Size(max = 200)
        private String subject;

        @NotNull
        @NotBlank
        @Size(max = 5000)
        private String body;

        @NotNull
        @Valid
        private Sender sender;

        public ContactMessage toContactMessage() {
            return ContactMessage.builder()
                    .withSubject(subject)
                    .withBody(body)
                    .withSender(ContactMessage.Sender.builder()
                            .withName(sender.name)
                            .withEmailAddress(sender.emailAddress)
                            .build()
                    )
                    .build();
        }

        @Getter
        @Setter
        @NoArgsConstructor
        @RegisterForReflection
        public static class Sender implements Serializable {

            @NotNull
            @NotBlank
            @Size(max = 200)
            private String name;

            @NotNull
            @Email
            @Size(max = 320)
            private String emailAddress;
        }
    }

}