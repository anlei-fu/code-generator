/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.ProxyBlockAnalyze;
import com.jasmine.crawler.pojo.req.AddProxyBlockAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetProxyBlockAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateProxyBlockAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface ProxyBlockAnalyzeService {

    boolean add(AddProxyBlockAnalyzeReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateProxyBlockAnalyzeReq req);

    ProxyBlockAnalyze getById(Integer id);

    PageResult<ProxyBlockAnalyze> getPage(GetProxyBlockAnalyzePageReq req);

}
