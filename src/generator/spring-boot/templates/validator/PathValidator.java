package com.@project.validate.validator;

import com.@project.validate.annotation.Path;
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