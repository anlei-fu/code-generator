/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.DownSystemAnalyze;
import com.jasmine.crawler.pojo.req.AddDownSystemAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetDownSystemAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateDownSystemAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.DownSystemAnalyzeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "DownSystemAnalyze")
@RestController
public class DownSystemAnalyzeController extends ControllerBase {

    @Autowired
    private DownSystemAnalyzeService downSystemAnalyzeService;

    @ApiOperation("add downSystemAnalyze")
    @PostMapping(path = "/downSystemAnalyze")
    public R add(@Validated @ModelAttribute AddDownSystemAnalyzeReq req) {
        boolean result = downSystemAnalyzeService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single downSystemAnalyze")
    @DeleteMapping(path = "/downSystemAnalyze/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = downSystemAnalyzeService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single downSystemAnalyze")
    @PutMapping(path = "/downSystemAnalyze/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDownSystemAnalyzeReq req) {
        boolean result = downSystemAnalyzeService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single downSystemAnalyze")
    @GetMapping(path = "/downSystemAnalyze/{id}")
    public R<DownSystemAnalyze> getById(@PathVariable Integer id) {
        DownSystemAnalyze result = downSystemAnalyzeService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get downSystemAnalyze page")
    @GetMapping(path = "/downSystemAnalyze/page")
    public R<PageResult<DownSystemAnalyze>> getPage(@Validated @ModelAttribute GetDownSystemAnalyzePageReq req) {
        PageResult<DownSystemAnalyze> result = downSystemAnalyzeService.getPage(req);
        return responseData(result);
    }

}

