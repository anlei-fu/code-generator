/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.entity.FieldInfo;
import com.jasmine.crud.pojo.req.AddFieldInfoReq;
import com.jasmine.crud.pojo.req.GetFieldInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateFieldInfoBatchReq;
import com.jasmine.crud.pojo.req.UpdateFieldInfoReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.pojo.resp.R;
import com.jasmine.crud.service.FieldInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("dictionary")
public class FieldInfoController extends ControllerBase {

    @Autowired
    private FieldInfoService fieldInfoService;

    @PostMapping
    public R add(@Validated AddFieldInfoReq req) {
        boolean result = fieldInfoService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = fieldInfoService.deleteById(id);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "delete-batch")
    public R deleteBatch(List<Integer> ids) {
        int expected = ids.size();
        int succeed = fieldInfoService.deleteBatch(ids);
        return responseBatch(succeed, expected);
    }

    @PutMapping
    public R update(@Validated UpdateFieldInfoReq req) {
        boolean result = fieldInfoService.update(req);
        return responseBoolean(result);
    }

    @PutMapping(path = "update-batch")
    public R updateBatch(@Validated UpdateFieldInfoBatchReq req) {
        int expected = req.getIds().size();
        int succeed = fieldInfoService.updateBatch(req);
        return responseBatch(succeed, expected);
    }

    @GetMapping(path = "{id}")
    public R<FieldInfo> getById(@PathVariable Integer id) {
        FieldInfo result = fieldInfoService.getById(id);
        return responseData(result);
    }

    @GetMapping(path = "/page")
    public R<PageResult<FieldInfo>> getPage(@Validated GetFieldInfoPageReq req) {
        PageResult<FieldInfo> result = fieldInfoService.getPage(req);
        return responseData(result);
    }

}

