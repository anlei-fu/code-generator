/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/8/2021, 10:09:59 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:25:23 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.utils;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.jasmine.crud1.pojo.req.PageReq;
import com.jasmine.crud1.pojo.resp.PageResult;

import java.util.function.Supplier;

public class PageHelperUtils {

    public static <T> PageResult<T> paging(PageReq req, Supplier<Page<T>> supplier) {
        Page page = startPage(req);
        return PageResult.create(page);
    }

    public static Page startPage(PageReq req) {
        return PageHelper.startPage(req.getPageIndex(), req.getPageSize());
    }
}
