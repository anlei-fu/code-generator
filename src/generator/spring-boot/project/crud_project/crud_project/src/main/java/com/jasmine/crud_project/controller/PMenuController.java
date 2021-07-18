/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.entity.PMenu;
import com.jasmine.crud_project.pojo.req.UpdatePMenuReq;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.PMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/p-menu")
public class PMenuController extends ControllerBase {

    @Autowired
    private PMenuService pMenuService;

    @PutMapping
    public R update(@RequestBody @Validated UpdatePMenuReq req) {
        boolean result = pMenuService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<PMenu> getById(@PathVariable Integer id) {
        PMenu result = pMenuService.getById(id);
        return responseData(result);
    }
}

