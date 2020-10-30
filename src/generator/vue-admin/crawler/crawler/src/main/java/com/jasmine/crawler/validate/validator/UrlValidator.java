/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 5:06:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.validate.validator;

import com.jasmine.crawler.validate.annotation.Url;
import jdk.internal.joptsimple.internal.Strings;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class UrlValidator implements ConstraintValidator<Url, String> {

    private static final Pattern VALIDATOR = Pattern.compile("[a-zA-z]+://[^\\s]*");

    private boolean required;

    @Override
    public void initialize(Url constraintAnnotation) {
        this.required = constraintAnnotation.required();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (Strings.isNullOrEmpty(value))
            return !this.required;

        return VALIDATOR.matcher(value).matches();
    }
}
