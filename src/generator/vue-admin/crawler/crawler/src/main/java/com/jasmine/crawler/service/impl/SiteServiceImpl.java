/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.SiteMapper;
import com.jasmine.crawler.pojo.entity.Site;
import com.jasmine.crawler.pojo.param.UpdateSiteParams;
import com.jasmine.crawler.pojo.req.AddSiteReq;
import com.jasmine.crawler.pojo.req.GetSitePageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.SiteService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SiteServiceImpl implements SiteService {

    @Autowired
    private SiteMapper siteMapper;

    @Override
    public boolean add(AddSiteReq req) {
        return siteMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return siteMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateSiteReq req) {
        UpdateSiteParams params = new UpdateSiteParams(id, req);
        return siteMapper.updateById(params) > 0;
    }

    @Override
    public Site getById(Integer id) {
        return siteMapper.getById(id);
    }

    @Override
    public PageResult<Site> getPage(GetSitePageReq req) {
        return PageHelperUtils.paging(req, () -> siteMapper.getPage(req));
    }

}
