/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PAnalyzeConfig;
import com.jasmine.crud_project.pojo.req.UpdatePAnalyzeConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PAnalyzeConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-analyze-config")
public class PAnalyzeConfigController extends ControllerBase {

    @Autowired
    private PAnalyzeConfigService pAnalyzeConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePAnalyzeConfigReq req) {
        boolean result = pAnalyzeConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PAnalyzeConfig> getById(@PathVariable Integer id) {
        PAnalyzeConfig result = pAnalyzeConfigService.getById(id);
        return responseData(result);
    }
}

