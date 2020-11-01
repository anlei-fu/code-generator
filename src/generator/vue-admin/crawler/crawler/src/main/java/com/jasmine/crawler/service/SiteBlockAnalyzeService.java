/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteBlockAnalyze;
import com.jasmine.crawler.pojo.req.AddSiteBlockAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetSiteBlockAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteBlockAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface SiteBlockAnalyzeService {

    boolean add(AddSiteBlockAnalyzeReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateSiteBlockAnalyzeReq req);

    SiteBlockAnalyze getById(Integer id);

    PageResult<SiteBlockAnalyze> getPage(GetSiteBlockAnalyzePageReq req);

}
