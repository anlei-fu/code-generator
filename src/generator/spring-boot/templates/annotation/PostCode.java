package com.@project.validate.annotation;

import com.@project.validate.validator.PostCodeValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = PostCodeValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface PostCode {
    String message() default "PostCode incorrect";

    boolean required() default false;
}
