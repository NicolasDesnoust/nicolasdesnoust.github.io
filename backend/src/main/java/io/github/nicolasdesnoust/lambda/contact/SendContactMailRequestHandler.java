package io.github.nicolasdesnoust.lambda.contact;

import java.util.Set;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;

import org.apache.http.HttpStatus;

import io.github.nicolasdesnoust.lambda.core.BaseRequestHandler;
import jakarta.validation.ConstraintViolation;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class SendContactMailRequestHandler extends BaseRequestHandler {

    static final MailSender mailSender = new AwsMailSender(new MessageFormatter());
    static final ContactErrorHandler contactErrorHandler = new ContactErrorHandler(gson);

    @Override
    protected APIGatewayProxyResponseEvent unsafeHandleRequest(APIGatewayProxyRequestEvent request, Context context) {
        LambdaLogger logger = context.getLogger();

        if (request.getBody() == null) {
            return globalErrorHandler.handleMissingRequestBody(logger);
        }
        ContactMessage contactMessage = gson.fromJson(request.getBody(), ContactMessage.class);

        Set<ConstraintViolation<ContactMessage>> violations = validator.validate(contactMessage);
        if (!violations.isEmpty()) {
            return globalErrorHandler.handleConstraintViolations(logger, violations, "Contact Message");
        }

        return mailSender.sendContactMail(contactMessage).fold(
                failure -> contactErrorHandler.handleMailSendingFailure(logger, failure),
                success -> handleMailSendingSuccess(logger, success));
    }

    public APIGatewayProxyResponseEvent handleMailSendingSuccess(LambdaLogger logger,
            MailSender.MailSendingSuccess success) {
        logger.log(success.getMessage() + "\n");
        return new APIGatewayProxyResponseEvent()
                .withStatusCode(HttpStatus.SC_NO_CONTENT)
                .withIsBase64Encoded(false);
    }

}
