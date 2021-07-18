/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PTable;
import com.jasmine.crud_project.pojo.req.UpdatePTableReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-table")
public class PTableController extends ControllerBase {

    @Autowired
    private PTableService pTableService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePTableReq req) {
        boolean result = pTableService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PTable> getById(@PathVariable Integer id) {
        PTable result = pTableService.getById(id);
        return responseData(result);
    }
}

