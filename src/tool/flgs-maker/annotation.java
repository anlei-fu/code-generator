package com.qianxingniwo.validate.flags.annotation;

import com.qianxingniwo.validate.flags.validator.@nameValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

/**
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date:
 * @Description:
 */
@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = @nameValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface @nameValidate {

    String message() default "参数不在枚举范围内";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}