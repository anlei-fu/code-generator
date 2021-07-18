/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.controller;

import com.jasmine.crud1.pojo.req.*;

import com.jasmine.crud1.pojo.resp.*;

import com.jasmine.crud1.pojo.req.AddCheckboxReq;
import com.jasmine.crud1.pojo.req.GetCheckboxPageReq;
import com.jasmine.crud1.pojo.req.UpdateCheckboxReq;
import com.jasmine.crud1.pojo.resp.PageResult;
import com.jasmine.crud1.service.CheckboxService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.validation.annotation.Validated;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/checkbox")
public class CheckboxController extends ControllerBase {

    @Autowired
    private CheckboxService checkboxService;

    @PostMapping
    public R add(@Validated AddCheckboxReq req) {
        boolean result = checkboxService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = checkboxService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@Validated UpdateCheckboxReq req) {
        boolean result = checkboxService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<CheckboxDetailResp>> getDetailPage(@Validated GetCheckboxPageReq req) {
        PageResult<CheckboxDetailResp> result = checkboxService.getDetailPage(req);
        return responseData(result);
    }

}

