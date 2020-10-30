/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Cookie;
import com.jasmine.crawler.pojo.req.AddCookieReq;
import com.jasmine.crawler.pojo.req.GetCookiePageReq;
import com.jasmine.crawler.pojo.req.UpdateCookieReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.CookieService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "Cookie")
@RestController
public class CookieController extends ControllerBase {

    @Autowired
    private CookieService cookieService;

    @ApiOperation("add cookie")
    @PostMapping(path = "/cookie")
    public R add(@Validated @ModelAttribute AddCookieReq req) {
        boolean result = cookieService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single cookie")
    @DeleteMapping(path = "/cookie/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = cookieService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single cookie")
    @PutMapping(path = "/cookie/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateCookieReq req) {
        boolean result = cookieService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single cookie")
    @GetMapping(path = "/cookie/{id}")
    public R<Cookie> getById(@PathVariable Integer id) {
        Cookie result = cookieService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get cookie page")
    @GetMapping(path = "/cookie/page")
    public R<PageResult<Cookie>> getPage(@Validated @ModelAttribute GetCookiePageReq req) {
        PageResult<Cookie> result = cookieService.getPage(req);
        return responseData(result);
    }

}

