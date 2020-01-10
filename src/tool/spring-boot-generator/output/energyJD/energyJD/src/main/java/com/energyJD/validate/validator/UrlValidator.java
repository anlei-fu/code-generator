package com.energyJD.validate.validator;

import com.energyJD.validate.annotation.Url;
import jdk.internal.joptsimple.internal.Strings;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

/**
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date:
 * @Description:
 */
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
