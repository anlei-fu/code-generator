/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.entity.TableEnum;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddTableEnumReq;
import com.jasmine.crud.pojo.req.GetTableEnumPageReq;
import com.jasmine.crud.pojo.req.UpdateTableEnumReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.TableEnumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/table-enum")
public class TableEnumController extends ControllerBase {

    @Autowired
    private TableEnumService tableEnumService;

    @PostMapping
    public R add(@RequestBody @Validated AddTableEnumReq req) {
        boolean result = tableEnumService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = tableEnumService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@RequestBody @Validated UpdateTableEnumReq req) {
        boolean result = tableEnumService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<TableEnum> getById(@PathVariable Integer id) {
        TableEnum result = tableEnumService.getById(id);
        return responseData(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<TableEnumDetailResp>> getDetailPage(@Validated GetTableEnumPageReq req) {
        PageResult<TableEnumDetailResp> result = tableEnumService.getDetailPage(req);
        return responseData(result);
    }

}

