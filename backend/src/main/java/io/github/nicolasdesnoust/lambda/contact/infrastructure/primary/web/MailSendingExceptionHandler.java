package io.github.nicolasdesnoust.lambda.contact.infrastructure.primary.web;

import io.github.nicolasdesnoust.lambda.contact.domain.MailSender.MailSendingException;
import io.github.nicolasdesnoust.lambda.core.infrastructure.primary.web.HttpError;
import lombok.extern.slf4j.Slf4j;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Slf4j
@Provider
public class MailSendingExceptionHandler implements ExceptionMapper<MailSendingException> {

    @Override
    public Response toResponse(MailSendingException exception) {
        log.error(exception.getMessage(), exception);

        HttpError httpError = HttpError.builder()
                .withReason(exception.getMessage())
                .build();

        return Response.status(Status.INTERNAL_SERVER_ERROR)
                .entity(httpError)
                .build();
    }

}
