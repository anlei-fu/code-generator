/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteIpBlockMap;
import com.jasmine.crawler.pojo.req.GetSiteIpBlockMapPageReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.SiteIpBlockMapService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "SiteIpBlockMap")
@RestController
public class SiteIpBlockMapController extends ControllerBase {

    @Autowired
    private SiteIpBlockMapService siteIpBlockMapService;

    @ApiOperation("get siteIpBlockMap page")
    @GetMapping(path = "/siteIpBlockMap/page")
    public R<PageResult<SiteIpBlockMap>> getPage(@Validated @ModelAttribute GetSiteIpBlockMapPageReq req) {
        PageResult<SiteIpBlockMap> result = siteIpBlockMapService.getPage(req);
        return responseData(result);
    }

}

