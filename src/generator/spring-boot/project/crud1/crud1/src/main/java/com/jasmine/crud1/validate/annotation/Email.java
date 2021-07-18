/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/8/2021, 10:09:59 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.validate.annotation;

import com.jasmine.crud1.validate.validator.EmailValidator;

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
