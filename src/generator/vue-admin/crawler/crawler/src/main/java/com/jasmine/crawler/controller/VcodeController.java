/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.controller;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Vcode;
import com.jasmine.crawler.pojo.req.AddVcodeReq;
import com.jasmine.crawler.pojo.req.GetVcodePageReq;
import com.jasmine.crawler.pojo.req.UpdateVcodeReq;
import com.jasmine.crawler.pojo.resp.PageResult;
import com.jasmine.crawler.pojo.resp.R;
import com.jasmine.crawler.service.VcodeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "Vcode")
@RestController
public class VcodeController extends ControllerBase {

    @Autowired
    private VcodeService vcodeService;

    @ApiOperation("add vcode")
    @PostMapping(path = "/vcode")
    public R add(@Validated @ModelAttribute AddVcodeReq req) {
        boolean result = vcodeService.add(req);
        return responseBoolean(result);
    }

    @ApiOperation("delete single vcode")
    @DeleteMapping(path = "/vcode/{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = vcodeService.deleteById(id);
        return responseBoolean(result);
    }

    @ApiOperation("update single vcode")
    @PutMapping(path = "/vcode/{id}")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateVcodeReq req) {
        boolean result = vcodeService.updateById(id, req);
        return responseBoolean(result);
    }

    @ApiOperation("get single vcode")
    @GetMapping(path = "/vcode/{id}")
    public R<Vcode> getById(@PathVariable Integer id) {
        Vcode result = vcodeService.getById(id);
        return responseData(result);
    }

    @ApiOperation("get vcode page")
    @GetMapping(path = "/vcode/page")
    public R<PageResult<Vcode>> getPage(@Validated @ModelAttribute GetVcodePageReq req) {
        PageResult<Vcode> result = vcodeService.getPage(req);
        return responseData(result);
    }

}

