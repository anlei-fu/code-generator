/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:25:23 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.validate.validator;

import com.jasmine.crud.validate.annotation.Email;
import cn.hutool.core.util.StrUtil;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class EmailValidator implements ConstraintValidator<Email, String> {

    private static final Pattern VALIDATOR = Pattern.compile("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");

    private boolean required;

    @Override
    public void initialize(Email constraintAnnotation) {
        this.required = constraintAnnotation.required();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (StrUtil.isEmpty(value))
            return !this.required;

        return VALIDATOR.matcher(value).matches();
    }
}
