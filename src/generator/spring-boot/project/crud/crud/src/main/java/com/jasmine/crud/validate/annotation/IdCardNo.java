/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-20 5:12:33 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.validate.annotation;

import com.jasmine.crud.validate.validator.IdCardNoValidator;

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