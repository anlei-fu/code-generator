/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.DynamicUrlJob;
import com.jasmine.crawler.pojo.req.AddDynamicUrlJobReq;
import com.jasmine.crawler.pojo.req.GetDynamicUrlJobPageReq;
import com.jasmine.crawler.pojo.req.UpdateDynamicUrlJobReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface DynamicUrlJobService {

    boolean add(AddDynamicUrlJobReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateDynamicUrlJobReq req);

    DynamicUrlJob getById(Integer id);

    PageResult<DynamicUrlJob> getPage(GetDynamicUrlJobPageReq req);

}
