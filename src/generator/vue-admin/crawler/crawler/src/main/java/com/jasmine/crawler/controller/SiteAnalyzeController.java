/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteAnalyze;
import com.jasmine.crawler.pojo.req.AddSiteAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetSiteAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.SiteAnalyzeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "SiteAnalyze")
@RestController
public class SiteAnalyzeController extends ControllerBase {

    @Autowired
    private SiteAnalyzeService siteAnalyzeService;

    @ApiOperation("add siteAnalyze")
    @PostMapping(path = "/siteAnalyze")
    public R add(@Validated @ModelAttribute AddSiteAnalyzeReq req) {
        boolean result = siteAnalyzeService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single siteAnalyze")
    @DeleteMapping(path = "/siteAnalyze/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = siteAnalyzeService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single siteAnalyze")
    @PutMapping(path = "/siteAnalyze/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSiteAnalyzeReq req) {
        boolean result = siteAnalyzeService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single siteAnalyze")
    @GetMapping(path = "/siteAnalyze/{id}")
    public R<SiteAnalyze> getById(@PathVariable Integer id) {
        SiteAnalyze result = siteAnalyzeService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get siteAnalyze page")
    @GetMapping(path = "/siteAnalyze/page")
    public R<PageResult<SiteAnalyze>> getPage(@Validated @ModelAttribute GetSiteAnalyzePageReq req) {
        PageResult<SiteAnalyze> result = siteAnalyzeService.getPage(req);
        return responseData(result);
    }

}

