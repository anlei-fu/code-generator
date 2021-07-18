/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PCheckboxEnum;
import com.jasmine.crud_project.pojo.req.UpdatePCheckboxEnumReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PCheckboxEnumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-checkbox-enum")
public class PCheckboxEnumController extends ControllerBase {

    @Autowired
    private PCheckboxEnumService pCheckboxEnumService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePCheckboxEnumReq req) {
        boolean result = pCheckboxEnumService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PCheckboxEnum> getById(@PathVariable Integer id) {
        PCheckboxEnum result = pCheckboxEnumService.getById(id);
        return responseData(result);
    }
}

