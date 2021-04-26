/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddModuleSReq;
import com.jasmine.crud.pojo.req.GetModuleSPageReq;
import com.jasmine.crud.pojo.req.UpdateModuleSReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ModuleSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/module-s")
public class ModuleSController extends ControllerBase {

    @Autowired
    private ModuleSService moduleSService;

    @PostMapping
    public R add(@Validated AddModuleSReq req) {
        boolean result = moduleSService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = moduleSService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@Validated UpdateModuleSReq req) {
        boolean result = moduleSService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<ModuleSDetailResp>> getDetailPage(@Validated GetModuleSPageReq req) {
        PageResult<ModuleSDetailResp> result = moduleSService.getDetailPage(req);
        return responseData(result);
    }

}

