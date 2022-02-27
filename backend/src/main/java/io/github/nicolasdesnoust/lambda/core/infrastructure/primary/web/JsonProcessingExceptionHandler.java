package io.github.nicolasdesnoust.lambda.core.infrastructure.primary.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.slf4j.Slf4j;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Slf4j
@Provider
public class JsonProcessingExceptionHandler implements ExceptionMapper<JsonProcessingException> {

    @Override
    public Response toResponse(JsonProcessingException exception) {
        log.warn("Invalid Json: {}", exception.getMessage());

        HttpError httpError = HttpError.builder()
                .withReason("Invalid Json")
                .build();

        return Response.status(Response.Status.BAD_REQUEST)
                .entity(httpError)
                .build();
    }

}
