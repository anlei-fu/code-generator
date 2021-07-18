/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PTableEnum;
import com.jasmine.crud_project.pojo.req.UpdatePTableEnumReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PTableEnumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-table-enum")
public class PTableEnumController extends ControllerBase {

    @Autowired
    private PTableEnumService pTableEnumService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePTableEnumReq req) {
        boolean result = pTableEnumService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PTableEnum> getById(@PathVariable Integer id) {
        PTableEnum result = pTableEnumService.getById(id);
        return responseData(result);
    }
}

