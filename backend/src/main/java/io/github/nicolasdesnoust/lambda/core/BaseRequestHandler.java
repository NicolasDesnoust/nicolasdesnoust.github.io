package io.github.nicolasdesnoust.lambda.core;

import java.util.HashMap;
import java.util.Map;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import org.hibernate.validator.messageinterpolation.ParameterMessageInterpolator;

import jakarta.validation.Validation;
import jakarta.validation.Validator;

/**
 * Classe de base dont les RequestHandler(s) doivent hériter.
 * <p>
 * Cette classe factorise des dépendances communes et garanti
 * que les erreurs non traitées ne sont pas exposées directement aux clients de
 * l'API REST.
 */
public abstract class BaseRequestHandler
        implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {

    protected static final Gson gson = new GsonBuilder().create();
    protected static final Validator validator = Validation.byDefaultProvider()
            .configure()
            .messageInterpolator(new ParameterMessageInterpolator())
            .buildValidatorFactory()
            .getValidator();
    protected static final GlobalErrorHandler globalErrorHandler = new GlobalErrorHandler(gson);

    private static final Map<String, String> DEFAULT_HEADERS = Map.of( //
            "Access-Control-Allow-Origin", "https://nicolasdesnoust.github.io", //
            "Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", //
            "Access-Control-Allow-Methods", "OPTIONS,POST" //
    );

    @Override
    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
        APIGatewayProxyResponseEvent response;

        try {
            response = unsafeHandleRequest(request, context);
        } catch (Exception ex) {
            response = globalErrorHandler.handleUnknownError(context.getLogger(), ex.getMessage());
        }

        var headers = response.getHeaders();
        if(headers == null) {
            headers = new HashMap<String, String>();
        }
        
        for(var header : DEFAULT_HEADERS.entrySet()) {
            headers.putIfAbsent(header.getKey(), header.getValue());
        }
        
        return response.withHeaders(headers);
    }

    protected abstract APIGatewayProxyResponseEvent unsafeHandleRequest(
            APIGatewayProxyRequestEvent request,
            Context context);

}
