/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 5:06:21 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.validate.validator;

import com.jasmine.crawler.validate.annotation.Path;
import jdk.internal.joptsimple.internal.Strings;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class PathValidator implements ConstraintValidator<Path, String> {

    private static final Pattern VALIDATOR = Pattern.compile("^(?:[a-zA-Z]\\:|\\\\[\\w\\.]+\\[\\w.$]+)\\(?:[\\w]+\\)*\\w([\\w.])+$");

    private boolean required;

    @Override
    public void initialize(Path constraintAnnotation) {
        this.required = constraintAnnotation.required();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (Strings.isNullOrEmpty(value))
            return !this.required;

        return VALIDATOR.matcher(value).matches();
    }
}