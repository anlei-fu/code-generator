package com.@project.validate.validator;

import com.@project.validate.annotation.PostCode;
import jdk.internal.joptsimple.internal.Strings;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class PostCodeValidator implements ConstraintValidator<PostCode, String> {

    private static final Pattern VALIDATOR = Pattern.compile("");

    private boolean required;

    @Override
    public void initialize(PostCode constraintAnnotation) {
        this.required = constraintAnnotation.required();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (Strings.isNullOrEmpty(value))
            return !this.required;

        return VALIDATOR.matcher(value).matches();
    }
}