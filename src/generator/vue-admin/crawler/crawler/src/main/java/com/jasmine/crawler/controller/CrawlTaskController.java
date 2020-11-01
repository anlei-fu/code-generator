/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.CrawlTask;
import com.jasmine.crawler.pojo.req.GetCrawlTaskPageReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.CrawlTaskService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "task info")
@RestController
public class CrawlTaskController extends ControllerBase {

    @Autowired
    private CrawlTaskService crawlTaskService;

    @ApiOperation("get crawlTask page")
    @GetMapping(path = "/crawlTask/page")
    public R<PageResult<CrawlTask>> getPage(@Validated @ModelAttribute GetCrawlTaskPageReq req) {
        PageResult<CrawlTask> result = crawlTaskService.getPage(req);
        return responseData(result);
    }

}

