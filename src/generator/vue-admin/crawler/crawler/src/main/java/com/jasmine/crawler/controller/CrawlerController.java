/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Crawler;
import com.jasmine.crawler.pojo.req.AddCrawlerReq;
import com.jasmine.crawler.pojo.req.GetCrawlerPageReq;
import com.jasmine.crawler.pojo.req.UpdateCrawlerReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.CrawlerService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "crawler info")
@RestController
public class CrawlerController extends ControllerBase {

    @Autowired
    private CrawlerService crawlerService;

    @ApiOperation("add crawler")
    @PostMapping(path = "/crawler")
    public R add(@Validated @ModelAttribute AddCrawlerReq req) {
        boolean result = crawlerService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single crawler")
    @DeleteMapping(path = "/crawler/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = crawlerService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single crawler")
    @PutMapping(path = "/crawler/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateCrawlerReq req) {
        boolean result = crawlerService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single crawler")
    @GetMapping(path = "/crawler/{id}")
    public R<Crawler> getById(@PathVariable Integer id) {
        Crawler result = crawlerService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get crawler page")
    @GetMapping(path = "/crawler/page")
    public R<PageResult<Crawler>> getPage(@Validated @ModelAttribute GetCrawlerPageReq req) {
        PageResult<Crawler> result = crawlerService.getPage(req);
        return responseData(result);
    }

}

