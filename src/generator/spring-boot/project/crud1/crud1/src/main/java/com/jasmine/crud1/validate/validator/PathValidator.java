/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/8/2021, 10:09:59 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.validate.validator;

import com.jasmine.crud1.validate.annotation.Path;
import cn.hutool.core.util.StrUtil;

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