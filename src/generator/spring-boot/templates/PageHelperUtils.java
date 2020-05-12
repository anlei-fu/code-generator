/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-4-18 4:54:16 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.@project.utils;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.@project.pojo.req.PageReq;
import com.@project.pojo.resp.PageResult;

import java.util.function.Supplier;


public class PageHelperUtils {

    public  static <T>  PageResult<T> paging(PageReq req, Supplier<Page<T>> supplier){
        startPage(req);
        return  PageResult.create(req,supplier.get());
    }

    public static void startPage(PageReq req) {
        PageHelper.startPage(req.getPageIndex(), req.getPageSize());
    }
}
