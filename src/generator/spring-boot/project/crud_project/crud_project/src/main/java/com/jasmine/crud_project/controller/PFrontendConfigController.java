/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PFrontendConfig;
import com.jasmine.crud_project.pojo.req.UpdatePFrontendConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PFrontendConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-frontend-config")
public class PFrontendConfigController extends ControllerBase {

    @Autowired
    private PFrontendConfigService pFrontendConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePFrontendConfigReq req) {
        boolean result = pFrontendConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PFrontendConfig> getById(@PathVariable Integer id) {
        PFrontendConfig result = pFrontendConfigService.getById(id);
        return responseData(result);
    }
}

