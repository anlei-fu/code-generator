/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.SiteBlockAnalyzeMapper;
import com.jasmine.crawler.pojo.entity.SiteBlockAnalyze;
import com.jasmine.crawler.pojo.param.UpdateSiteBlockAnalyzeParams;
import com.jasmine.crawler.pojo.req.AddSiteBlockAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetSiteBlockAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteBlockAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.SiteBlockAnalyzeService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SiteBlockAnalyzeServiceImpl implements SiteBlockAnalyzeService {

    @Autowired
    private SiteBlockAnalyzeMapper siteBlockAnalyzeMapper;

    @Override
    public boolean add(AddSiteBlockAnalyzeReq req) {
        return siteBlockAnalyzeMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return siteBlockAnalyzeMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateSiteBlockAnalyzeReq req) {
        UpdateSiteBlockAnalyzeParams params = new UpdateSiteBlockAnalyzeParams(id, req);
        return siteBlockAnalyzeMapper.updateById(params) > 0;
    }

    @Override
    public SiteBlockAnalyze getById(Integer id) {
        return siteBlockAnalyzeMapper.getById(id);
    }

    @Override
    public PageResult<SiteBlockAnalyze> getPage(GetSiteBlockAnalyzePageReq req) {
        return PageHelperUtils.paging(req, () -> siteBlockAnalyzeMapper.getPage(req));
    }

}

