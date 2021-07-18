/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PEnum;
import com.jasmine.crud_project.pojo.req.UpdatePEnumReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PEnumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-enum")
public class PEnumController extends ControllerBase {

    @Autowired
    private PEnumService pEnumService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePEnumReq req) {
        boolean result = pEnumService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PEnum> getById(@PathVariable Integer id) {
        PEnum result = pEnumService.getById(id);
        return responseData(result);
    }
}

