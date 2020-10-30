/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.ProxyAnalyze;
import com.jasmine.crawler.pojo.req.AddProxyAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetProxyAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateProxyAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface ProxyAnalyzeService {

    boolean add(AddProxyAnalyzeReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateProxyAnalyzeReq req);

    ProxyAnalyze getById(Integer id);

    PageResult<ProxyAnalyze> getPage(GetProxyAnalyzePageReq req);

}
