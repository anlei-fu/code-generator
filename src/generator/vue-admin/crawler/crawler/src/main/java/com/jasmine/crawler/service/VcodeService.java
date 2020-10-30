/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Vcode;
import com.jasmine.crawler.pojo.req.AddVcodeReq;
import com.jasmine.crawler.pojo.req.GetVcodePageReq;
import com.jasmine.crawler.pojo.req.UpdateVcodeReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface VcodeService {

    boolean add(AddVcodeReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateVcodeReq req);

    Vcode getById(Integer id);

    PageResult<Vcode> getPage(GetVcodePageReq req);

}
