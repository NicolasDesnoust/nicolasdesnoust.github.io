package io.github.nicolasdesnoust.lambda.contact.domain;

import lombok.Builder;
import lombok.Value;

@Value
@Builder(setterPrefix = "with")
public class ContactMessage {

    String subject;
    String body;
    Sender sender;

    @Value
    @Builder(setterPrefix = "with")
    public static class Sender {

        String name;
        String emailAddress;

    }
}
