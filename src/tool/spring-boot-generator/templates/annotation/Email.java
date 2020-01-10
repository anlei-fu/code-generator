package com.@project.validate.annotation;

import com.@project.validate.validator.EmailValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = EmailValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)

public @interface Email {
    String message() default "Email incorrect";

    boolean required() default  false;
}
