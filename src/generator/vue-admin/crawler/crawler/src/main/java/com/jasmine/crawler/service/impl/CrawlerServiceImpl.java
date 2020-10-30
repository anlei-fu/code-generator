/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.CrawlerMapper;
import com.jasmine.crawler.pojo.entity.Crawler;
import com.jasmine.crawler.pojo.param.UpdateCrawlerParams;
import com.jasmine.crawler.pojo.req.AddCrawlerReq;
import com.jasmine.crawler.pojo.req.GetCrawlerPageReq;
import com.jasmine.crawler.pojo.req.UpdateCrawlerReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.CrawlerService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrawlerServiceImpl implements CrawlerService {

    @Autowired
    private CrawlerMapper crawlerMapper;

    @Override
    public boolean add(AddCrawlerReq req) {
        return crawlerMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return crawlerMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateCrawlerReq req) {
        UpdateCrawlerParams params = new UpdateCrawlerParams(id, req);
        return crawlerMapper.updateById(params) > 0;
    }

    @Override
    public Crawler getById(Integer id) {
        return crawlerMapper.getById(id);
    }

    @Override
    public PageResult<Crawler> getPage(GetCrawlerPageReq req) {
        return PageHelperUtils.paging(req, () -> crawlerMapper.getPage(req));
    }

}

