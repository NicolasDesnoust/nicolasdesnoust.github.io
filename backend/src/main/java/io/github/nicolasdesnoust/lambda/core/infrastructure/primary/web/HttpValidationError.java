package io.github.nicolasdesnoust.lambda.core.infrastructure.primary.web;

import io.github.nicolasdesnoust.lambda.core.infrastructure.primary.web.HttpError.HttpSubError;
import io.quarkus.runtime.annotations.RegisterForReflection;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.ConstraintViolation;

@Data
@Builder(setterPrefix = "with")
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@RegisterForReflection
public class HttpValidationError implements HttpSubError {
    private String object;
    private String field;
    private Object rejectedValue;
    private String reason;

    public static HttpValidationError from(ConstraintViolation<?> constraintViolation) {
        return HttpValidationError.builder()
                .withObject(constraintViolation.getRootBeanClass().getSimpleName())
                .withField(constraintViolation.getPropertyPath().toString())
                .withRejectedValue(constraintViolation.getInvalidValue())
                .withReason(constraintViolation.getMessage())
                .build();
    }
}