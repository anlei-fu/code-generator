/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PThemeConfig;
import com.jasmine.crud_project.pojo.req.UpdatePThemeConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PThemeConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-theme-config")
public class PThemeConfigController extends ControllerBase {

    @Autowired
    private PThemeConfigService pThemeConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePThemeConfigReq req) {
        boolean result = pThemeConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PThemeConfig> getById(@PathVariable Integer id) {
        PThemeConfig result = pThemeConfigService.getById(id);
        return responseData(result);
    }
}

