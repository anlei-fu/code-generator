/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.entity.AditionalOption;
import com.jasmine.crud.pojo.req.AddAditionalOptionReq;
import com.jasmine.crud.pojo.req.GetAditionalOptionPageReq;
import com.jasmine.crud.pojo.req.UpdateAditionalOptionBatchReq;
import com.jasmine.crud.pojo.req.UpdateAditionalOptionReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.pojo.resp.R;
import com.jasmine.crud.service.AditionalOptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("dictionary")
public class AditionalOptionController extends ControllerBase {

    @Autowired
    private AditionalOptionService aditionalOptionService;

    @PostMapping
    public R add(@Validated AddAditionalOptionReq req) {
        boolean result = aditionalOptionService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = aditionalOptionService.deleteById(id);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "delete-batch")
    public R deleteBatch(List<Integer> ids) {
        int expected = ids.size();
        int succeed = aditionalOptionService.deleteBatch(ids);
        return responseBatch(succeed, expected);
    }

    @PutMapping
    public R update(@Validated UpdateAditionalOptionReq req) {
        boolean result = aditionalOptionService.update(req);
        return responseBoolean(result);
    }

    @PutMapping(path = "update-batch")
    public R updateBatch(@Validated UpdateAditionalOptionBatchReq req) {
        int expected = req.getIds().size();
        int succeed = aditionalOptionService.updateBatch(req);
        return responseBatch(succeed, expected);
    }

    @GetMapping(path = "{id}")
    public R<AditionalOption> getById(@PathVariable Integer id) {
        AditionalOption result = aditionalOptionService.getById(id);
        return responseData(result);
    }

    @GetMapping(path = "/page")
    public R<PageResult<AditionalOption>> getPage(@Validated GetAditionalOptionPageReq req) {
        PageResult<AditionalOption> result = aditionalOptionService.getPage(req);
        return responseData(result);
    }

}

