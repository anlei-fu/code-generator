/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PIconConfig;
import com.jasmine.crud_project.pojo.req.UpdatePIconConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PIconConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-icon-config")
public class PIconConfigController extends ControllerBase {

    @Autowired
    private PIconConfigService pIconConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePIconConfigReq req) {
        boolean result = pIconConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PIconConfig> getById(@PathVariable Integer id) {
        PIconConfig result = pIconConfigService.getById(id);
        return responseData(result);
    }
}

