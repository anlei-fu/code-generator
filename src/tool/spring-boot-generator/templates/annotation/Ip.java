package com.@project.validate.annotation;

import com.@project.validate.validator.IpValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = IpValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)

public @interface Ip {
    String message() default "Ip incorrect";

    boolean required() default false;
}
