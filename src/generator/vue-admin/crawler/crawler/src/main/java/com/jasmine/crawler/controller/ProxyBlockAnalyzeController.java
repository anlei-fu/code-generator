/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.ProxyBlockAnalyze;
import com.jasmine.crawler.pojo.req.AddProxyBlockAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetProxyBlockAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateProxyBlockAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.ProxyBlockAnalyzeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "ProxyBlockAnalyze")
@RestController
public class ProxyBlockAnalyzeController extends ControllerBase {

    @Autowired
    private ProxyBlockAnalyzeService proxyBlockAnalyzeService;

    @ApiOperation("add proxyBlockAnalyze")
    @PostMapping(path = "/proxyBlockAnalyze")
    public R add(@Validated @ModelAttribute AddProxyBlockAnalyzeReq req) {
        boolean result = proxyBlockAnalyzeService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single proxyBlockAnalyze")
    @DeleteMapping(path = "/proxyBlockAnalyze/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = proxyBlockAnalyzeService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single proxyBlockAnalyze")
    @PutMapping(path = "/proxyBlockAnalyze/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateProxyBlockAnalyzeReq req) {
        boolean result = proxyBlockAnalyzeService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single proxyBlockAnalyze")
    @GetMapping(path = "/proxyBlockAnalyze/{id}")
    public R<ProxyBlockAnalyze> getById(@PathVariable Integer id) {
        ProxyBlockAnalyze result = proxyBlockAnalyzeService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get proxyBlockAnalyze page")
    @GetMapping(path = "/proxyBlockAnalyze/page")
    public R<PageResult<ProxyBlockAnalyze>> getPage(@Validated @ModelAttribute GetProxyBlockAnalyzePageReq req) {
        PageResult<ProxyBlockAnalyze> result = proxyBlockAnalyzeService.getPage(req);
        return responseData(result);
    }

}

