/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.DynamicUrlJob;
import com.jasmine.crawler.pojo.req.AddDynamicUrlJobReq;
import com.jasmine.crawler.pojo.req.GetDynamicUrlJobPageReq;
import com.jasmine.crawler.pojo.req.UpdateDynamicUrlJobReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.DynamicUrlJobService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "DynamicUrlJob")
@RestController
public class DynamicUrlJobController extends ControllerBase {

    @Autowired
    private DynamicUrlJobService dynamicUrlJobService;

    @ApiOperation("add dynamicUrlJob")
    @PostMapping(path = "/dynamicUrlJob")
    public R add(@Validated @ModelAttribute AddDynamicUrlJobReq req) {
        boolean result = dynamicUrlJobService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single dynamicUrlJob")
    @DeleteMapping(path = "/dynamicUrlJob/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = dynamicUrlJobService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single dynamicUrlJob")
    @PutMapping(path = "/dynamicUrlJob/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDynamicUrlJobReq req) {
        boolean result = dynamicUrlJobService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single dynamicUrlJob")
    @GetMapping(path = "/dynamicUrlJob/{id}")
    public R<DynamicUrlJob> getById(@PathVariable Integer id) {
        DynamicUrlJob result = dynamicUrlJobService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get dynamicUrlJob page")
    @GetMapping(path = "/dynamicUrlJob/page")
    public R<PageResult<DynamicUrlJob>> getPage(@Validated @ModelAttribute GetDynamicUrlJobPageReq req) {
        PageResult<DynamicUrlJob> result = dynamicUrlJobService.getPage(req);
        return responseData(result);
    }

}

