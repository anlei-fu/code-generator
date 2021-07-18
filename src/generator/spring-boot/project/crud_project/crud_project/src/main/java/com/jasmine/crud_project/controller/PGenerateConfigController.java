/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PGenerateConfig;
import com.jasmine.crud_project.pojo.req.UpdatePGenerateConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PGenerateConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-generate-config")
public class PGenerateConfigController extends ControllerBase {

    @Autowired
    private PGenerateConfigService pGenerateConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePGenerateConfigReq req) {
        boolean result = pGenerateConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PGenerateConfig> getById(@PathVariable Integer id) {
        PGenerateConfig result = pGenerateConfigService.getById(id);
        return responseData(result);
    }
}

