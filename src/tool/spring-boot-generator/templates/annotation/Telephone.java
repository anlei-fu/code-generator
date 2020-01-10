package com.@project.validate.annotation;

import com.@project.validate.validator.TelephoneValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = TelephoneValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface Telephone {
    String message() default "Telephone incorrect";

    boolean required() default false;
}
