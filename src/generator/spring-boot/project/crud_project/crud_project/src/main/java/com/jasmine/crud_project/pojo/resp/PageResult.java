/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 1:58:28 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:25:23 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.pojo.resp;

import com.github.pagehelper.Page;
import lombok.Data;

import java.util.List;

@Data
public class PageResult<T> {
    private Integer pageIndex;
    private Integer pageSize;
    private Long total;
    private List<T> list;

    public static <T> PageResult<T> create(Page<T> page) {
        PageResult<T> result = new PageResult<>();
        result.list = page.getResult();
        result.total = page.getTotal();
        result.pageIndex = page.getPageNum();
        result.pageSize = page.getPageSize();
        return result;
    }
}
