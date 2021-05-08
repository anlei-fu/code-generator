/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-20 5:12:33 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.validate.validator;

import cn.hutool.core.util.StrUtil;
import com.jasmine.crud.validate.annotation.Path;

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
        if (StrUtil.isEmpty(value))
            return !this.required;

        return VALIDATOR.matcher(value).matches();
    }
}