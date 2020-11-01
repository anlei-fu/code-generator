/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteBlockAnalyze;
import com.jasmine.crawler.pojo.req.AddSiteBlockAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetSiteBlockAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteBlockAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.SiteBlockAnalyzeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "SiteBlockAnalyze")
@RestController
public class SiteBlockAnalyzeController extends ControllerBase {

    @Autowired
    private SiteBlockAnalyzeService siteBlockAnalyzeService;

    @ApiOperation("add siteBlockAnalyze")
    @PostMapping(path = "/siteBlockAnalyze")
    public R add(@Validated @ModelAttribute AddSiteBlockAnalyzeReq req) {
        boolean result = siteBlockAnalyzeService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single siteBlockAnalyze")
    @DeleteMapping(path = "/siteBlockAnalyze/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = siteBlockAnalyzeService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single siteBlockAnalyze")
    @PutMapping(path = "/siteBlockAnalyze/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSiteBlockAnalyzeReq req) {
        boolean result = siteBlockAnalyzeService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single siteBlockAnalyze")
    @GetMapping(path = "/siteBlockAnalyze/{id}")
    public R<SiteBlockAnalyze> getById(@PathVariable Integer id) {
        SiteBlockAnalyze result = siteBlockAnalyzeService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get siteBlockAnalyze page")
    @GetMapping(path = "/siteBlockAnalyze/page")
    public R<PageResult<SiteBlockAnalyze>> getPage(@Validated @ModelAttribute GetSiteBlockAnalyzePageReq req) {
        PageResult<SiteBlockAnalyze> result = siteBlockAnalyzeService.getPage(req);
        return responseData(result);
    }

}

