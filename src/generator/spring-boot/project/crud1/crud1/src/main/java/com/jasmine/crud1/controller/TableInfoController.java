/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.controller;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.pojo.req.AddTableInfoReq;
import com.jasmine.crud1.pojo.req.GetTableInfoPageReq;
import com.jasmine.crud1.pojo.req.UpdateTableInfoReq;
import com.jasmine.crud1.pojo.resp.PageResult;
import com.jasmine.crud1.service.TableInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/table-info")
public class TableInfoController extends ControllerBase {

    @Autowired
    private TableInfoService tableInfoService;

    @PostMapping
    public R add(@Validated AddTableInfoReq req) {
        boolean result = tableInfoService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = tableInfoService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@Validated UpdateTableInfoReq req) {
        boolean result = tableInfoService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<TableInfoDetailResp>> getDetailPage(@Validated GetTableInfoPageReq req) {
        PageResult<TableInfoDetailResp> result = tableInfoService.getDetailPage(req);
        return responseData(result);
    }

}

