/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteAnalyze;
import com.jasmine.crawler.pojo.req.AddSiteAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetSiteAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface SiteAnalyzeService {

    boolean add(AddSiteAnalyzeReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateSiteAnalyzeReq req);

    SiteAnalyze getById(Integer id);

    PageResult<SiteAnalyze> getPage(GetSiteAnalyzePageReq req);

}
