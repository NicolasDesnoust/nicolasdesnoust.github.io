package io.github.nicolasdesnoust.lambda.contact;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class ContactMessage implements Serializable {

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

    @Getter
    @Setter
    @NoArgsConstructor
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
