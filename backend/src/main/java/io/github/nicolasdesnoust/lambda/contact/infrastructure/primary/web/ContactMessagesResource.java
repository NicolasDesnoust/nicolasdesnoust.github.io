package io.github.nicolasdesnoust.lambda.contact.infrastructure.primary.web;

import io.github.nicolasdesnoust.lambda.contact.usecases.SendContactMailUseCase;
import io.github.nicolasdesnoust.lambda.contact.usecases.SendContactMailUseCase.SendContactMailRequest;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/contact-messages")
@RequiredArgsConstructor
public class ContactMessagesResource {

    private final SendContactMailUseCase useCase;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response sendContactMail(@NotNull SendContactMailRequest request) {
        useCase.sendContactMail(request);

        return Response.noContent()
                .build();
    }

}
