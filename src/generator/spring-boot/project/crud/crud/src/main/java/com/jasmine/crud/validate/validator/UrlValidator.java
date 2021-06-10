/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:33:38 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.validate.validator;

import cn.hutool.core.util.StrUtil;
import com.jasmine.crud.validate.annotation.Url;

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
        if (StrUtil.isEmpty(value))
            return !this.required;

        return VALIDATOR.matcher(value).matches();
    }
}
