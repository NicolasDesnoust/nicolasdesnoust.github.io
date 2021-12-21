package io.github.nicolasdesnoust.lambda.core;

import io.github.nicolasdesnoust.lambda.core.HttpError.HttpSubError;
import jakarta.validation.ConstraintViolation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Builder(setterPrefix = "with")
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
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