package io.github.nicolasdesnoust.lambda.contact;

import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.google.gson.Gson;
import io.github.nicolasdesnoust.lambda.core.HttpError;
import lombok.RequiredArgsConstructor;
import org.apache.http.HttpStatus;

@RequiredArgsConstructor
public class ContactErrorHandler {

    private final Gson gson;

    public APIGatewayProxyResponseEvent handleMailSendingFailure(
            LambdaLogger logger,
            MailSender.MailSendingFailure failure
    ) {
        logger.log(failure.getReason() + "\n");

        return new APIGatewayProxyResponseEvent()
                .withStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR)
                .withIsBase64Encoded(false)
                .withBody(gson.toJson(
                        HttpError.builder()
                                .withReason(failure.getReason())
                                .build()));
    }
}
