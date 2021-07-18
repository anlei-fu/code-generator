/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 1:58:28 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.validate.validator;

import com.jasmine.crud_project.validate.annotation.Telephone;
import cn.hutool.core.util.StrUtil;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class TelephoneValidator implements ConstraintValidator<Telephone, String> {

    private static final Pattern VALIDATOR = Pattern.compile("\\d{3}-\\d{8}|\\d{4}-\\d{7}");

    private boolean required;

    @Override
    public void initialize(Telephone constraintAnnotation) {
        this.required = constraintAnnotation.required();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (StrUtil.isEmpty(value))
            return !this.required;

        return VALIDATOR.matcher(value).matches();
    }
}