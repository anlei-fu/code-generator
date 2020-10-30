/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.DownSystemSiteMapper;
import com.jasmine.crawler.pojo.entity.DownSystemSite;
import com.jasmine.crawler.pojo.param.UpdateDownSystemSiteParams;
import com.jasmine.crawler.pojo.req.AddDownSystemSiteReq;
import com.jasmine.crawler.pojo.req.GetDownSystemSitePageReq;
import com.jasmine.crawler.pojo.req.UpdateDownSystemSiteReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.DownSystemSiteService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DownSystemSiteServiceImpl implements DownSystemSiteService {

    @Autowired
    private DownSystemSiteMapper downSystemSiteMapper;

    @Override
    public boolean add(AddDownSystemSiteReq req) {
        return downSystemSiteMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return downSystemSiteMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateDownSystemSiteReq req) {
        UpdateDownSystemSiteParams params = new UpdateDownSystemSiteParams(id, req);
        return downSystemSiteMapper.updateById(params) > 0;
    }

    @Override
    public DownSystemSite getById(Integer id) {
        return downSystemSiteMapper.getById(id);
    }

    @Override
    public PageResult<DownSystemSite> getPage(GetDownSystemSitePageReq req) {
        return PageHelperUtils.paging(req, () -> downSystemSiteMapper.getPage(req));
    }

}

