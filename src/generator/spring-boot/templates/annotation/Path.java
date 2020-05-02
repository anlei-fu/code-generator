package com.@project.validate.annotation;

import com.@project.validate.validator.PathValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = PathValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface Path {
    String message() default "Path incorrect";

    boolean required() default false;
}
