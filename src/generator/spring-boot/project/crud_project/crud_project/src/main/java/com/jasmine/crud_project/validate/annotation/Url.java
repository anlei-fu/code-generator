/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 1:58:28 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.validate.annotation;

import com.jasmine.crud_project.validate.validator.UrlValidator;

import javax.validation.Constraint;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = UrlValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface Url {
    String message() default "Url incorrect";

    boolean required() default false;
}
