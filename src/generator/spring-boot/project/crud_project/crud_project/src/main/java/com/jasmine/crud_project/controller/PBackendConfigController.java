/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PBackendConfig;
import com.jasmine.crud_project.pojo.req.UpdatePBackendConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PBackendConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-backend-config")
public class PBackendConfigController extends ControllerBase {

    @Autowired
    private PBackendConfigService pBackendConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePBackendConfigReq req) {
        boolean result = pBackendConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PBackendConfig> getById(@PathVariable Integer id) {
        PBackendConfig result = pBackendConfigService.getById(id);
        return responseData(result);
    }
}

