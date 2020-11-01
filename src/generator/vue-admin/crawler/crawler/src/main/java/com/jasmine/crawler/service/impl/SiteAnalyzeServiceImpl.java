/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.SiteAnalyzeMapper;
import com.jasmine.crawler.pojo.entity.SiteAnalyze;
import com.jasmine.crawler.pojo.param.UpdateSiteAnalyzeParams;
import com.jasmine.crawler.pojo.req.AddSiteAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetSiteAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.SiteAnalyzeService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SiteAnalyzeServiceImpl implements SiteAnalyzeService {

    @Autowired
    private SiteAnalyzeMapper siteAnalyzeMapper;

    @Override
    public boolean add(AddSiteAnalyzeReq req) {
        return siteAnalyzeMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return siteAnalyzeMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateSiteAnalyzeReq req) {
        UpdateSiteAnalyzeParams params = new UpdateSiteAnalyzeParams(id, req);
        return siteAnalyzeMapper.updateById(params) > 0;
    }

    @Override
    public SiteAnalyze getById(Integer id) {
        return siteAnalyzeMapper.getById(id);
    }

    @Override
    public PageResult<SiteAnalyze> getPage(GetSiteAnalyzePageReq req) {
        return PageHelperUtils.paging(req, () -> siteAnalyzeMapper.getPage(req));
    }

}

