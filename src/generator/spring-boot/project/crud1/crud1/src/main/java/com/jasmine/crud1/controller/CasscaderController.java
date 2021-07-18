/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.controller;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.pojo.req.AddCasscaderReq;
import com.jasmine.crud1.pojo.req.GetCasscaderPageReq;
import com.jasmine.crud1.pojo.req.UpdateCasscaderReq;
import com.jasmine.crud1.pojo.resp.PageResult;
import com.jasmine.crud1.service.CasscaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/casscader")
public class CasscaderController extends ControllerBase {

    @Autowired
    private CasscaderService casscaderService;

    @PostMapping
    public R add(@Validated AddCasscaderReq req) {
        boolean result = casscaderService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = casscaderService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@Validated UpdateCasscaderReq req) {
        boolean result = casscaderService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<CasscaderDetailResp>> getDetailPage(@Validated GetCasscaderPageReq req) {
        PageResult<CasscaderDetailResp> result = casscaderService.getDetailPage(req);
        return responseData(result);
    }

}

