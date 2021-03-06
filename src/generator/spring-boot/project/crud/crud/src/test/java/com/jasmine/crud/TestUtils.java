/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:33:38 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;

/**
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date:
 * @Description:
 */
public class TestUtils {

    public static void printQuery(Object dto, Object result) {
        System.out.println("dto");
        print(dto);
        System.out.println("result");
        print(result);
    }

    public static void print(Object obj) {
        String json = JSON.toJSONString(obj, SerializerFeature.PrettyFormat, SerializerFeature.WriteNullStringAsEmpty);
        System.out.println(json);
    }

    public static void checkUpdate(Object dto, Object updated) {

    }
}
