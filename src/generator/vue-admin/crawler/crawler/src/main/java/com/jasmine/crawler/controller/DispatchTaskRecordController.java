/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.DispatchTaskRecord;
import com.jasmine.crawler.pojo.req.GetDispatchTaskRecordPageReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.DispatchTaskRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "DispatchTaskRecord")
@RestController
public class DispatchTaskRecordController extends ControllerBase {

    @Autowired
    private DispatchTaskRecordService dispatchTaskRecordService;

    @ApiOperation("get dispatchTaskRecord page")
    @GetMapping(path = "/dispatchTaskRecord/page")
    public R<PageResult<DispatchTaskRecord>> getPage(@Validated @ModelAttribute GetDispatchTaskRecordPageReq req) {
        PageResult<DispatchTaskRecord> result = dispatchTaskRecordService.getPage(req);
        return responseData(result);
    }

}

