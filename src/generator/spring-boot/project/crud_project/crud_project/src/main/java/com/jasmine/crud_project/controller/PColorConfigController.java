/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PColorConfig;
import com.jasmine.crud_project.pojo.req.UpdatePColorConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PColorConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-color-config")
public class PColorConfigController extends ControllerBase {

    @Autowired
    private PColorConfigService pColorConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePColorConfigReq req) {
        boolean result = pColorConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PColorConfig> getById(@PathVariable Integer id) {
        PColorConfig result = pColorConfigService.getById(id);
        return responseData(result);
    }
}

