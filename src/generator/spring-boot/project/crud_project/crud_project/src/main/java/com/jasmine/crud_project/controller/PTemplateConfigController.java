/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PTemplateConfig;
import com.jasmine.crud_project.pojo.req.UpdatePTemplateConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PTemplateConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-template-config")
public class PTemplateConfigController extends ControllerBase {

    @Autowired
    private PTemplateConfigService pTemplateConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePTemplateConfigReq req) {
        boolean result = pTemplateConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PTemplateConfig> getById(@PathVariable Integer id) {
        PTemplateConfig result = pTemplateConfigService.getById(id);
        return responseData(result);
    }
}

