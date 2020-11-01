/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-28 4:23:10 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteBlockRule;
import com.jasmine.crawler.pojo.req.AddSiteBlockRuleReq;
import com.jasmine.crawler.pojo.req.GetSiteBlockRulePageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteBlockRuleReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.pojo.resp.SiteBlockRuleDetailResp;
import com.jasmine.crawler.service.SiteBlockRuleService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "site-url-block-rule")
@RestController
public class SiteBlockRuleController extends ControllerBase {

    @Autowired
    private SiteBlockRuleService siteBlockRuleService;

    @ApiOperation("add siteBlockRule")
    @PostMapping(path = "/siteBlockRule")
    public R add(@Validated @ModelAttribute AddSiteBlockRuleReq req) {
        boolean result = siteBlockRuleService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single siteBlockRule")
    @DeleteMapping(path = "/siteBlockRule/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = siteBlockRuleService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single siteBlockRule")
    @PutMapping(path = "/siteBlockRule/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSiteBlockRuleReq req) {
        boolean result = siteBlockRuleService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single siteBlockRule")
    @GetMapping(path = "/siteBlockRule/{id}")
    public R<SiteBlockRule> getById(@PathVariable Integer id) {
        SiteBlockRule result = siteBlockRuleService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get siteBlockRule page")
    @GetMapping(path = "/siteBlockRule/page")
    public R<PageResult<SiteBlockRule>> getPage(@Validated @ModelAttribute GetSiteBlockRulePageReq req) {
        PageResult<SiteBlockRule> result = siteBlockRuleService.getPage(req);
        return responseData(result);
    }

    @ApiOperation("get single siteBlockRule with additional details")
    @GetMapping(path = "/siteBlockRule/detail/{id}")
    public R<SiteBlockRuleDetailResp> getDetailById(@PathVariable Integer id) {
        SiteBlockRuleDetailResp result = siteBlockRuleService.getDetailById(id);
        return responseData(result);
    }

    @ApiOperation("get siteBlockRule page with additional details")
    @GetMapping(path = "/siteBlockRule/detail/page")
    public R<PageResult<SiteBlockRuleDetailResp>> getDetailPage(@Validated @ModelAttribute GetSiteBlockRulePageReq req) {
        PageResult<SiteBlockRuleDetailResp> result = siteBlockRuleService.getDetailPage(req);
        return responseData(result);
    }

}

