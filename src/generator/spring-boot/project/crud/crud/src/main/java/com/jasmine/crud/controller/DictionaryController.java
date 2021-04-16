/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.entity.Dictionary;
import com.jasmine.crud.pojo.req.AddDictionaryReq;
import com.jasmine.crud.pojo.req.GetDictionaryPageReq;
import com.jasmine.crud.pojo.req.UpdateDictionaryBatchReq;
import com.jasmine.crud.pojo.req.UpdateDictionaryReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.pojo.resp.R;
import com.jasmine.crud.service.DictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("dictionary")
public class DictionaryController extends ControllerBase {

    @Autowired
    private DictionaryService dictionaryService;

    @PostMapping
    public R add(@Validated AddDictionaryReq req) {
        boolean result = dictionaryService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = dictionaryService.deleteById(id);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "delete-batch")
    public R deleteBatch(List<Integer> ids) {
        int expected = ids.size();
        int succeed = dictionaryService.deleteBatch(ids);
        return responseBatch(succeed, expected);
    }

    @PutMapping
    public R update(@Validated UpdateDictionaryReq req) {
        boolean result = dictionaryService.update(req);
        return responseBoolean(result);
    }

    @PutMapping(path = "update-batch")
    public R updateBatch(@Validated UpdateDictionaryBatchReq req) {
        int expected = req.getIds().size();
        int succeed = dictionaryService.updateBatch(req);
        return responseBatch(succeed, expected);
    }

    @GetMapping(path = "{id}")
    public R<Dictionary> getById(@PathVariable Integer id) {
        Dictionary result = dictionaryService.getById(id);
        return responseData(result);
    }

    @GetMapping(path = "/page")
    public R<PageResult<Dictionary>> getPage(@Validated GetDictionaryPageReq req) {
        PageResult<Dictionary> result = dictionaryService.getPage(req);
        return responseData(result);
    }

}

