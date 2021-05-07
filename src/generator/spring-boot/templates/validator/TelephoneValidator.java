package com.@project.validate.validator;

import com.@project.validate.annotation.Telephone;
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