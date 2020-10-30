/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SystemAlarm;
import com.jasmine.crawler.pojo.req.AddSystemAlarmReq;
import com.jasmine.crawler.pojo.req.GetSystemAlarmPageReq;
import com.jasmine.crawler.pojo.req.UpdateSystemAlarmReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.SystemAlarmService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "SystemAlarm")
@RestController
public class SystemAlarmController extends ControllerBase {

    @Autowired
    private SystemAlarmService systemAlarmService;

    @ApiOperation("add systemAlarm")
    @PostMapping(path = "/systemAlarm")
    public R add(@Validated @ModelAttribute AddSystemAlarmReq req) {
        boolean result = systemAlarmService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single systemAlarm")
    @DeleteMapping(path = "/systemAlarm/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = systemAlarmService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single systemAlarm")
    @PutMapping(path = "/systemAlarm/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSystemAlarmReq req) {
        boolean result = systemAlarmService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single systemAlarm")
    @GetMapping(path = "/systemAlarm/{id}")
    public R<SystemAlarm> getById(@PathVariable Integer id) {
        SystemAlarm result = systemAlarmService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get systemAlarm page")
    @GetMapping(path = "/systemAlarm/page")
    public R<PageResult<SystemAlarm>> getPage(@Validated @ModelAttribute GetSystemAlarmPageReq req) {
        PageResult<SystemAlarm> result = systemAlarmService.getPage(req);
        return responseData(result);
    }

}

