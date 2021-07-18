/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PProjectConfig;
import com.jasmine.crud_project.pojo.req.UpdatePProjectConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PProjectConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-project-config")
public class PProjectConfigController extends ControllerBase {

    @Autowired
    private PProjectConfigService pProjectConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePProjectConfigReq req) {
        boolean result = pProjectConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PProjectConfig> getById(@PathVariable Integer id) {
        PProjectConfig result = pProjectConfigService.getById(id);
        return responseData(result);
    }
}

