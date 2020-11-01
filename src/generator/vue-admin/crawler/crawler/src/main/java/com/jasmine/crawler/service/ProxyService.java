/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Proxy;
import com.jasmine.crawler.pojo.req.AddProxyReq;
import com.jasmine.crawler.pojo.req.GetProxyPageReq;
import com.jasmine.crawler.pojo.req.UpdateProxyReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface ProxyService {

    boolean add(AddProxyReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateProxyReq req);

    Proxy getById(Integer id);

    PageResult<Proxy> getPage(GetProxyPageReq req);

}
