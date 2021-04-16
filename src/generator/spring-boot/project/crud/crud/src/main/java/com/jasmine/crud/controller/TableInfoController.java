/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.entity.TableInfo;
import com.jasmine.crud.pojo.req.AddTableInfoReq;
import com.jasmine.crud.pojo.req.GetTableInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateTableInfoBatchReq;
import com.jasmine.crud.pojo.req.UpdateTableInfoReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.pojo.resp.R;
import com.jasmine.crud.service.TableInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("dictionary")
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

    @DeleteMapping(path = "delete-batch")
    public R deleteBatch(List<Integer> ids) {
        int expected = ids.size();
        int succeed = tableInfoService.deleteBatch(ids);
        return responseBatch(succeed, expected);
    }

    @PutMapping
    public R update(@Validated UpdateTableInfoReq req) {
        boolean result = tableInfoService.update(req);
        return responseBoolean(result);
    }

    @PutMapping(path = "update-batch")
    public R updateBatch(@Validated UpdateTableInfoBatchReq req) {
        int expected = req.getIds().size();
        int succeed = tableInfoService.updateBatch(req);
        return responseBatch(succeed, expected);
    }

    @GetMapping(path = "{id}")
    public R<TableInfo> getById(@PathVariable Integer id) {
        TableInfo result = tableInfoService.getById(id);
        return responseData(result);
    }

    @GetMapping(path = "/page")
    public R<PageResult<TableInfo>> getPage(@Validated GetTableInfoPageReq req) {
        PageResult<TableInfo> result = tableInfoService.getPage(req);
        return responseData(result);
    }

}

