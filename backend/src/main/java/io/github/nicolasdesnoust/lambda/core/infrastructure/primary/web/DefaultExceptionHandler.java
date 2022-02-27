package io.github.nicolasdesnoust.lambda.core.infrastructure.primary.web;

import lombok.extern.slf4j.Slf4j;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Slf4j
@Provider
public class DefaultExceptionHandler implements ExceptionMapper<Exception> {

    @Override
    public Response toResponse(Exception exception) {
        log.error("An unknown error occurred", exception);

        HttpError httpError = HttpError.builder()
                .withReason("Erreur interne du serveur")
                .build();

        return Response.status(Status.INTERNAL_SERVER_ERROR)
                .entity(httpError)
                .build();
    }

}
