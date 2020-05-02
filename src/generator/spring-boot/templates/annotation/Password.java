package com.@project.validate.annotation;

import com.@project.validate.validator.PasswordValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = PasswordValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface Password {
    String message() default "Password contains invalid character or length <6 or length >20";

    boolean required() default false;

    int level() default 1;
}
