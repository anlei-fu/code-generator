/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.entity.ModuleS;
import com.jasmine.crud.pojo.req.AddModuleSReq;
import com.jasmine.crud.pojo.req.GetModuleSPageReq;
import com.jasmine.crud.pojo.req.UpdateModuleSBatchReq;
import com.jasmine.crud.pojo.req.UpdateModuleSReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.pojo.resp.R;
import com.jasmine.crud.service.ModuleSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("dictionary")
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

    @DeleteMapping(path = "delete-batch")
    public R deleteBatch(List<Integer> ids) {
        int expected = ids.size();
        int succeed = moduleSService.deleteBatch(ids);
        return responseBatch(succeed, expected);
    }

    @PutMapping
    public R update(@Validated UpdateModuleSReq req) {
        boolean result = moduleSService.update(req);
        return responseBoolean(result);
    }

    @PutMapping(path = "update-batch")
    public R updateBatch(@Validated UpdateModuleSBatchReq req) {
        int expected = req.getIds().size();
        int succeed = moduleSService.updateBatch(req);
        return responseBatch(succeed, expected);
    }

    @GetMapping(path = "{id}")
    public R<ModuleS> getById(@PathVariable Integer id) {
        ModuleS result = moduleSService.getById(id);
        return responseData(result);
    }

    @GetMapping(path = "/page")
    public R<PageResult<ModuleS>> getPage(@Validated GetModuleSPageReq req) {
        PageResult<ModuleS> result = moduleSService.getPage(req);
        return responseData(result);
    }

}

