/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteAccount;
import com.jasmine.crawler.pojo.req.AddSiteAccountReq;
import com.jasmine.crawler.pojo.req.GetSiteAccountPageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteAccountReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.SiteAccountService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "site account info")
@RestController
public class SiteAccountController extends ControllerBase {

    @Autowired
    private SiteAccountService siteAccountService;

    @ApiOperation("add siteAccount")
    @PostMapping(path = "/siteAccount")
    public R add(@Validated @ModelAttribute AddSiteAccountReq req) {
        boolean result = siteAccountService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single siteAccount")
    @DeleteMapping(path = "/siteAccount/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = siteAccountService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single siteAccount")
    @PutMapping(path = "/siteAccount/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSiteAccountReq req) {
        boolean result = siteAccountService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single siteAccount")
    @GetMapping(path = "/siteAccount/{id}")
    public R<SiteAccount> getById(@PathVariable Integer id) {
        SiteAccount result = siteAccountService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get siteAccount page")
    @GetMapping(path = "/siteAccount/page")
    public R<PageResult<SiteAccount>> getPage(@Validated @ModelAttribute GetSiteAccountPageReq req) {
        PageResult<SiteAccount> result = siteAccountService.getPage(req);
        return responseData(result);
    }

}

