/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.controller;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.pojo.req.AddEnumInfoReq;
import com.jasmine.crud1.pojo.req.GetEnumInfoPageReq;
import com.jasmine.crud1.pojo.req.UpdateEnumInfoReq;
import com.jasmine.crud1.pojo.resp.PageResult;
import com.jasmine.crud1.service.EnumInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/enum-info")
public class EnumInfoController extends ControllerBase {

    @Autowired
    private EnumInfoService enumInfoService;

    @PostMapping
    public R add(@Validated AddEnumInfoReq req) {
        boolean result = enumInfoService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable String id) {
        boolean result = enumInfoService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@Validated UpdateEnumInfoReq req) {
        boolean result = enumInfoService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<EnumInfoDetailResp>> getDetailPage(@Validated GetEnumInfoPageReq req) {
        PageResult<EnumInfoDetailResp> result = enumInfoService.getDetailPage(req);
        return responseData(result);
    }

}

