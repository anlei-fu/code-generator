/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.CrawlerAnalyze;
import com.jasmine.crawler.pojo.req.AddCrawlerAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetCrawlerAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateCrawlerAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface CrawlerAnalyzeService {

    boolean add(AddCrawlerAnalyzeReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateCrawlerAnalyzeReq req);

    CrawlerAnalyze getById(Integer id);

    PageResult<CrawlerAnalyze> getPage(GetCrawlerAnalyzePageReq req);

}
