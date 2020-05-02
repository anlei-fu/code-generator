package com.@project.validate.annotation;

import com.@project.validate.validator.IdCardNoValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = IdCardNoValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)

public @interface IdCardNo {
    String message() default "IdCardNo incorrect";

    boolean required() default false;
}
