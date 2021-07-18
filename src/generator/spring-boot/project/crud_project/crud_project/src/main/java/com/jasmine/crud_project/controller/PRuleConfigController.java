/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PRuleConfig;
import com.jasmine.crud_project.pojo.req.UpdatePRuleConfigReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PRuleConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-rule-config")
public class PRuleConfigController extends ControllerBase {

    @Autowired
    private PRuleConfigService pRuleConfigService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePRuleConfigReq req) {
        boolean result = pRuleConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PRuleConfig> getById(@PathVariable Integer id) {
        PRuleConfig result = pRuleConfigService.getById(id);
        return responseData(result);
    }
}

