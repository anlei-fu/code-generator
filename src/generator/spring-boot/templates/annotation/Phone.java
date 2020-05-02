package com.@project.validate.annotation;

import com.@project.validate.validator.PhoneValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = PhoneValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface Phone {
    String message() default "Phone incorrect";

    boolean required() default false;
}
