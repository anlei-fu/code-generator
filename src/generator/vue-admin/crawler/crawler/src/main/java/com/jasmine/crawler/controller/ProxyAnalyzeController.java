/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.ProxyAnalyze;
import com.jasmine.crawler.pojo.req.AddProxyAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetProxyAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateProxyAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.ProxyAnalyzeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "ProxyAnalyze")
@RestController
public class ProxyAnalyzeController extends ControllerBase {

    @Autowired
    private ProxyAnalyzeService proxyAnalyzeService;

    @ApiOperation("add proxyAnalyze")
    @PostMapping(path = "/proxyAnalyze")
    public R add(@Validated @ModelAttribute AddProxyAnalyzeReq req) {
        boolean result = proxyAnalyzeService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single proxyAnalyze")
    @DeleteMapping(path = "/proxyAnalyze/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = proxyAnalyzeService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single proxyAnalyze")
    @PutMapping(path = "/proxyAnalyze/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateProxyAnalyzeReq req) {
        boolean result = proxyAnalyzeService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single proxyAnalyze")
    @GetMapping(path = "/proxyAnalyze/{id}")
    public R<ProxyAnalyze> getById(@PathVariable Integer id) {
        ProxyAnalyze result = proxyAnalyzeService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get proxyAnalyze page")
    @GetMapping(path = "/proxyAnalyze/page")
    public R<PageResult<ProxyAnalyze>> getPage(@Validated @ModelAttribute GetProxyAnalyzePageReq req) {
        PageResult<ProxyAnalyze> result = proxyAnalyzeService.getPage(req);
        return responseData(result);
    }

}

