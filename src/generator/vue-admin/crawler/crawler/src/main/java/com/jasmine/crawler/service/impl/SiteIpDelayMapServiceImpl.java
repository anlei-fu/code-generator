/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.mapper.SiteIpDelayMapMapper;
import com.jasmine.crawler.pojo.entity.SiteIpDelayMap;
import com.jasmine.crawler.pojo.req.GetSiteIpDelayMapPageReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.service.SiteIpDelayMapService;
import com.jasmine.crawler.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SiteIpDelayMapServiceImpl implements SiteIpDelayMapService {

    @Autowired
    private SiteIpDelayMapMapper siteIpDelayMapMapper;

    @Override
    public PageResult<SiteIpDelayMap> getPage(GetSiteIpDelayMapPageReq req) {
        return PageHelperUtils.paging(req, () -> siteIpDelayMapMapper.getPage(req));
    }

}

