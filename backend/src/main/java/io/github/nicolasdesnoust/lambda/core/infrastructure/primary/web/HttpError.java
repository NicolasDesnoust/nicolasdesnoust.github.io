package io.github.nicolasdesnoust.lambda.core.infrastructure.primary.web;

import io.quarkus.runtime.annotations.RegisterForReflection;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

import java.io.Serializable;
import java.util.List;

@Value
@AllArgsConstructor
@Builder(setterPrefix = "with")
@RegisterForReflection
@SuppressWarnings("squid:S1948")
public class HttpError implements Serializable {
    String reason;
    List<HttpSubError> subErrors;

    public interface HttpSubError extends Serializable {
    }
}
