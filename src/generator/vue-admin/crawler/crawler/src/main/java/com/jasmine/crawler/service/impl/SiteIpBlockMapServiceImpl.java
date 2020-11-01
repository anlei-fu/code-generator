/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.SiteIpBlockMapMapper;
import com.jasmine.crawler.pojo.entity.SiteIpBlockMap;
import com.jasmine.crawler.pojo.req.GetSiteIpBlockMapPageReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.SiteIpBlockMapService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SiteIpBlockMapServiceImpl implements SiteIpBlockMapService {

    @Autowired
    private SiteIpBlockMapMapper siteIpBlockMapMapper;

    @Override
    public PageResult<SiteIpBlockMap> getPage(GetSiteIpBlockMapPageReq req) {
        return PageHelperUtils.paging(req, () -> siteIpBlockMapMapper.getPage(req));
    }

}

