/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-28 4:23:10 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.SiteBlockRuleMapper;
import com.jasmine.crawler.pojo.entity.SiteBlockRule;
import com.jasmine.crawler.pojo.param.UpdateSiteBlockRuleParams;
import com.jasmine.crawler.pojo.req.AddSiteBlockRuleReq;
import com.jasmine.crawler.pojo.req.GetSiteBlockRulePageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteBlockRuleReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.SiteBlockRuleDetailResp;
import com.jasmine.crawler.service.SiteBlockRuleService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SiteBlockRuleServiceImpl implements SiteBlockRuleService {

    @Autowired
    private SiteBlockRuleMapper siteBlockRuleMapper;

    @Override
    public boolean add(AddSiteBlockRuleReq req) {
        return siteBlockRuleMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return siteBlockRuleMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateSiteBlockRuleReq req) {
        UpdateSiteBlockRuleParams params = new UpdateSiteBlockRuleParams(id, req);
        return siteBlockRuleMapper.updateById(params) > 0;
    }

    @Override
    public SiteBlockRule getById(Integer id) {
        return siteBlockRuleMapper.getById(id);
    }

    @Override
    public PageResult<SiteBlockRule> getPage(GetSiteBlockRulePageReq req) {
        return PageHelperUtils.paging(req, () -> siteBlockRuleMapper.getPage(req));
    }

    @Override
    public SiteBlockRuleDetailResp getDetailById(Integer id) {
        return siteBlockRuleMapper.getDetailById(id);
    }

    @Override
    public PageResult<SiteBlockRuleDetailResp> getDetailPage(GetSiteBlockRulePageReq req) {
        return PageHelperUtils.paging(req, () -> siteBlockRuleMapper.getDetailPage(req));
    }

}
