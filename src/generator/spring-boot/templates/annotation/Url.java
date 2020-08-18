package com.@project.validate.annotation;

import com.@project.validate.validator.URLValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = URLValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface URL {
    String message() default "URL incorrect";

    boolean required() default false;
}
