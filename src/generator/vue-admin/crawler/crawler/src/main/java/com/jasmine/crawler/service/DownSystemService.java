/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.DownSystem;
import com.jasmine.crawler.pojo.req.AddDownSystemReq;
import com.jasmine.crawler.pojo.req.GetDownSystemPageReq;
import com.jasmine.crawler.pojo.req.UpdateDownSystemReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface DownSystemService {

    boolean add(AddDownSystemReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateDownSystemReq req);

    DownSystem getById(Integer id);

    PageResult<DownSystem> getPage(GetDownSystemPageReq req);

}
