/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PDefaultConfig;
import com.jasmine.crud_project.pojo.req.UpdatePDefaultConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PDefaultConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-default-config")
public class PDefaultConfigController extends ControllerBase {

    @Autowired
    private PDefaultConfigService pDefaultConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePDefaultConfigReq req) {
        boolean result = pDefaultConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PDefaultConfig> getById(@PathVariable Integer id) {
        PDefaultConfig result = pDefaultConfigService.getById(id);
        return responseData(result);
    }

}

