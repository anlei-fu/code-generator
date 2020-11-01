/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Crawler;
import com.jasmine.crawler.pojo.req.AddCrawlerReq;
import com.jasmine.crawler.pojo.req.GetCrawlerPageReq;
import com.jasmine.crawler.pojo.req.UpdateCrawlerReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface CrawlerService {

    boolean add(AddCrawlerReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateCrawlerReq req);

    Crawler getById(Integer id);

    PageResult<Crawler> getPage(GetCrawlerPageReq req);

}
