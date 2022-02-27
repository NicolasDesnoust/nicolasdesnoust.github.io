package io.github.nicolasdesnoust.lambda.core.infrastructure.primary.web;

import io.github.nicolasdesnoust.lambda.core.infrastructure.primary.web.HttpError.HttpSubError;
import lombok.extern.slf4j.Slf4j;

import javax.validation.ConstraintViolationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Provider
public class ConstraintViolationExceptionHandler implements ExceptionMapper<ConstraintViolationException> {

    @Override
    public Response toResponse(ConstraintViolationException exception) {
        log.warn("Invalid request: {}", exception.getMessage());

        List<HttpSubError> subErrors = exception.getConstraintViolations()
                .stream()
                .map(HttpValidationError::from)
                .collect(Collectors.toList());

        var httpError = HttpError.builder()
                .withReason(exception.getMessage())
                .withSubErrors(subErrors)
                .build();

        return Response.status(Status.BAD_REQUEST)
                .entity(httpError)
                .build();
    }

}
