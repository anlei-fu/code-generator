package com.@project.validate.validator;

import com.@project.validate.annotation.IdCardNo;
import cn.hutool.core.util.StrUtil;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.regex.Pattern;

/**
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date:
 * @Description:
 */
public class IdCardNoValidator implements ConstraintValidator<IdCardNo, String> {
    private static final Pattern VALIDATOR = Pattern.compile("^\\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$");

    private boolean required;

    @Override
    public void initialize(IdCardNo constraintAnnotation) {
        this.required = constraintAnnotation.required();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (StrUtil.isEmpty(value))
            return !this.required;

        return VALIDATOR.matcher(value).matches();
    }
}
