/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.CrawlerAnalyze;
import com.jasmine.crawler.pojo.req.AddCrawlerAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetCrawlerAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateCrawlerAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.CrawlerAnalyzeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "CrawlerAnalyze")
@RestController
public class CrawlerAnalyzeController extends ControllerBase {

    @Autowired
    private CrawlerAnalyzeService crawlerAnalyzeService;

    @ApiOperation("add crawlerAnalyze")
    @PostMapping(path = "/crawlerAnalyze")
    public R add(@Validated @ModelAttribute AddCrawlerAnalyzeReq req) {
        boolean result = crawlerAnalyzeService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single crawlerAnalyze")
    @DeleteMapping(path = "/crawlerAnalyze/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = crawlerAnalyzeService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single crawlerAnalyze")
    @PutMapping(path = "/crawlerAnalyze/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateCrawlerAnalyzeReq req) {
        boolean result = crawlerAnalyzeService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single crawlerAnalyze")
    @GetMapping(path = "/crawlerAnalyze/{id}")
    public R<CrawlerAnalyze> getById(@PathVariable Integer id) {
        CrawlerAnalyze result = crawlerAnalyzeService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get crawlerAnalyze page")
    @GetMapping(path = "/crawlerAnalyze/page")
    public R<PageResult<CrawlerAnalyze>> getPage(@Validated @ModelAttribute GetCrawlerAnalyzePageReq req) {
        PageResult<CrawlerAnalyze> result = crawlerAnalyzeService.getPage(req);
        return responseData(result);
    }

}

