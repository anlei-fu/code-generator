/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:33:38 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.validate.annotation;

import com.jasmine.crud.validate.validator.PostCodeValidator;

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
