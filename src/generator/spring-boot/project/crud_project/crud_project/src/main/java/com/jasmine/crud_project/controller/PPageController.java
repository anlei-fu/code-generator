/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PPage;
import com.jasmine.crud_project.pojo.req.UpdatePPageReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-page")
public class PPageController extends ControllerBase {

    @Autowired
    private PPageService pPageService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePPageReq req) {
        boolean result = pPageService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PPage> getById(@PathVariable Integer id) {
        PPage result = pPageService.getById(id);
        return responseData(result);
    }
}

