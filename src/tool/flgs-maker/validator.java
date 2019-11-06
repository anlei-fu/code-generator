package com.qianxingniwo.validate.flags.validator;

import com.qianxingniwo.util.FlagsUtil;
import com.qianxingniwo.validate.flags.annotation.@nameValidate;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date:
 * @Description:
 */
public class @nameValidator implements ConstraintValidator<@nameValidate, Integer> {

    @Override
    public boolean isValid(Integer value, ConstraintValidatorContext constraintValidatorContext) {
        return FlagsUtil.check@name(value);
    }
}