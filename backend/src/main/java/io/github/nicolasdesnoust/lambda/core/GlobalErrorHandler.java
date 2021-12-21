package io.github.nicolasdesnoust.lambda.core;

import java.util.Set;
import java.util.stream.Collectors;

import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.google.gson.Gson;

import org.apache.http.HttpStatus;

import io.github.nicolasdesnoust.lambda.contact.ContactMessage;
import jakarta.validation.ConstraintViolation;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class GlobalErrorHandler {

    private final Gson gson;

    public APIGatewayProxyResponseEvent handleUnknownError(LambdaLogger logger, String errorMessage) {
        logger.log("An unknown error occurred : " + errorMessage + "\n");

        return new APIGatewayProxyResponseEvent()
                .withStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR)
                .withIsBase64Encoded(false)
                .withBody(gson.toJson(
                        HttpError.builder()
                                .withReason("Internal Server Error.")
                                .build()));
    }

    public APIGatewayProxyResponseEvent handleMissingRequestBody(LambdaLogger logger) {
        logger.log("Request body is missing.\n");

        return new APIGatewayProxyResponseEvent()
                .withStatusCode(HttpStatus.SC_BAD_REQUEST)
                .withIsBase64Encoded(false)
                .withBody(gson.toJson(
                        HttpError.builder()
                                .withReason("Request body is missing.")
                                .build()));
    }

    public APIGatewayProxyResponseEvent handleConstraintViolations(LambdaLogger logger,
            Set<ConstraintViolation<ContactMessage>> violations, String objectName) {
        logger.log(objectName + " has validation errors.\n");

        return new APIGatewayProxyResponseEvent()
                .withStatusCode(HttpStatus.SC_BAD_REQUEST)
                .withIsBase64Encoded(false)
                .withBody(gson.toJson(
                        HttpError.builder()
                                .withReason(objectName + " has validation errors.")
                                .withSubErrors(violations.stream()
                                        .map(HttpValidationError::from)
                                        .collect(Collectors.toList()))
                                .build()));
    }
}
