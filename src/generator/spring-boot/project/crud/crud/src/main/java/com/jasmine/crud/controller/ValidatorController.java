/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddValidatorReq;
import com.jasmine.crud.pojo.req.GetValidatorPageReq;
import com.jasmine.crud.pojo.req.UpdateValidatorReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ValidatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/validator")
public class ValidatorController extends ControllerBase {

    @Autowired
    private ValidatorService validatorService;

    @PostMapping
    public R add(@Validated AddValidatorReq req) {
        boolean result = validatorService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = validatorService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@Validated UpdateValidatorReq req) {
        boolean result = validatorService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<ValidatorDetailResp>> getDetailPage(@Validated GetValidatorPageReq req) {
        PageResult<ValidatorDetailResp> result = validatorService.getDetailPage(req);
        return responseData(result);
    }

}

