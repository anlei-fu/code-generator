/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.DownSystemSite;
import com.jasmine.crawler.pojo.req.AddDownSystemSiteReq;
import com.jasmine.crawler.pojo.req.GetDownSystemSitePageReq;
import com.jasmine.crawler.pojo.req.UpdateDownSystemSiteReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.DownSystemSiteService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "DownSystemSite")
@RestController
public class DownSystemSiteController extends ControllerBase {

    @Autowired
    private DownSystemSiteService downSystemSiteService;

    @ApiOperation("add downSystemSite")
    @PostMapping(path = "/downSystemSite")
    public R add(@Validated @ModelAttribute AddDownSystemSiteReq req) {
        boolean result = downSystemSiteService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single downSystemSite")
    @DeleteMapping(path = "/downSystemSite/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = downSystemSiteService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single downSystemSite")
    @PutMapping(path = "/downSystemSite/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDownSystemSiteReq req) {
        boolean result = downSystemSiteService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single downSystemSite")
    @GetMapping(path = "/downSystemSite/{id}")
    public R<DownSystemSite> getById(@PathVariable Integer id) {
        DownSystemSite result = downSystemSiteService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get downSystemSite page")
    @GetMapping(path = "/downSystemSite/page")
    public R<PageResult<DownSystemSite>> getPage(@Validated @ModelAttribute GetDownSystemSitePageReq req) {
        PageResult<DownSystemSite> result = downSystemSiteService.getPage(req);
        return responseData(result);
    }

}

