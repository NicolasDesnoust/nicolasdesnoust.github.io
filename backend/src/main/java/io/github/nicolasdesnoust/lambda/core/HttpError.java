package io.github.nicolasdesnoust.lambda.core;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

import java.io.Serializable;
import java.util.List;

@Value
@AllArgsConstructor
@Builder(setterPrefix = "with")
@SuppressWarnings("squid:S1948")
public class HttpError implements Serializable {
    String reason;
    List<HttpSubError> subErrors;

    public interface HttpSubError extends Serializable {
    }
}
