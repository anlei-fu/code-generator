/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteIpDelayMap;
import com.jasmine.crawler.pojo.req.GetSiteIpDelayMapPageReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.SiteIpDelayMapService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "SiteIpDelayMap")
@RestController
public class SiteIpDelayMapController extends ControllerBase {

    @Autowired
    private SiteIpDelayMapService siteIpDelayMapService;

    @ApiOperation("get siteIpDelayMap page")
    @GetMapping(path = "/siteIpDelayMap/page")
    public R<PageResult<SiteIpDelayMap>> getPage(@Validated @ModelAttribute GetSiteIpDelayMapPageReq req) {
        PageResult<SiteIpDelayMap> result = siteIpDelayMapService.getPage(req);
        return responseData(result);
    }

}

