/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PControlConfig;
import com.jasmine.crud_project.pojo.req.UpdatePControlConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PControlConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-control-config")
public class PControlConfigController extends ControllerBase {

    @Autowired
    private PControlConfigService pControlConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePControlConfigReq req) {
        boolean result = pControlConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PControlConfig> getById(@PathVariable Integer id) {
        PControlConfig result = pControlConfigService.getById(id);
        return responseData(result);
    }

}

