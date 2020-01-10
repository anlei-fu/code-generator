package com.@project.validate.annotation;

import com.@project.validate.validator.UrlValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = UrlValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface Url {
    String message() default "Url incorrect";

    boolean required() default false;
}
