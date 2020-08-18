package com.@project.validate.validator;

import com.@project.validate.annotation.URL;
import jdk.internal.joptsimple.internal.Strings;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

public class URLValidator implements ConstraintValidator<URL, String> {

    private static final Pattern VALIDATOR = Pattern.compile("[a-zA-z]+://[^\\s]*");

    private boolean required;

    @Override
    public void initialize(URL constraintAnnotation) {
        this.required = constraintAnnotation.required();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (Strings.isNullOrEmpty(value))
            return !this.required;

        return VALIDATOR.matcher(value).matches();
    }
}
