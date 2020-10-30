/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.CrawlerAnalyzeMapper;
import com.jasmine.crawler.pojo.entity.CrawlerAnalyze;
import com.jasmine.crawler.pojo.param.UpdateCrawlerAnalyzeParams;
import com.jasmine.crawler.pojo.req.AddCrawlerAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetCrawlerAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateCrawlerAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.CrawlerAnalyzeService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CrawlerAnalyzeServiceImpl implements CrawlerAnalyzeService {

    @Autowired
    private CrawlerAnalyzeMapper crawlerAnalyzeMapper;

    @Override
    public boolean add(AddCrawlerAnalyzeReq req) {
        return crawlerAnalyzeMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return crawlerAnalyzeMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateCrawlerAnalyzeReq req) {
        UpdateCrawlerAnalyzeParams params = new UpdateCrawlerAnalyzeParams(id, req);
        return crawlerAnalyzeMapper.updateById(params) > 0;
    }

    @Override
    public CrawlerAnalyze getById(Integer id) {
        return crawlerAnalyzeMapper.getById(id);
    }

    @Override
    public PageResult<CrawlerAnalyze> getPage(GetCrawlerAnalyzePageReq req) {
        return PageHelperUtils.paging(req, () -> crawlerAnalyzeMapper.getPage(req));
    }

}

