/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Proxy;
import com.jasmine.crawler.pojo.req.AddProxyReq;
import com.jasmine.crawler.pojo.req.GetProxyPageReq;
import com.jasmine.crawler.pojo.req.UpdateProxyReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.ProxyService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "proxy info")
@RestController
public class ProxyController extends ControllerBase {

    @Autowired
    private ProxyService proxyService;

    @ApiOperation("add proxy")
    @PostMapping(path = "/proxy")
    public R add(@Validated @ModelAttribute AddProxyReq req) {
        boolean result = proxyService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single proxy")
    @DeleteMapping(path = "/proxy/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = proxyService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single proxy")
    @PutMapping(path = "/proxy/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateProxyReq req) {
        boolean result = proxyService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single proxy")
    @GetMapping(path = "/proxy/{id}")
    public R<Proxy> getById(@PathVariable Integer id) {
        Proxy result = proxyService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get proxy page")
    @GetMapping(path = "/proxy/page")
    public R<PageResult<Proxy>> getPage(@Validated @ModelAttribute GetProxyPageReq req) {
        PageResult<Proxy> result = proxyService.getPage(req);
        return responseData(result);
    }

}

