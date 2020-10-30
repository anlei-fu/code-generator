/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.SiteAccountMapper;
import com.jasmine.crawler.pojo.entity.SiteAccount;
import com.jasmine.crawler.pojo.param.UpdateSiteAccountParams;
import com.jasmine.crawler.pojo.req.AddSiteAccountReq;
import com.jasmine.crawler.pojo.req.GetSiteAccountPageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteAccountReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.SiteAccountService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SiteAccountServiceImpl implements SiteAccountService {

    @Autowired
    private SiteAccountMapper siteAccountMapper;

    @Override
    public boolean add(AddSiteAccountReq req) {
        return siteAccountMapper.add(req) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return siteAccountMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateById(Integer id, UpdateSiteAccountReq req) {
        UpdateSiteAccountParams params = new UpdateSiteAccountParams(id, req);
        return siteAccountMapper.updateById(params) > 0;
    }

    @Override
    public SiteAccount getById(Integer id) {
        return siteAccountMapper.getById(id);
    }

    @Override
    public PageResult<SiteAccount> getPage(GetSiteAccountPageReq req) {
        return PageHelperUtils.paging(req, () -> siteAccountMapper.getPage(req));
    }

}

