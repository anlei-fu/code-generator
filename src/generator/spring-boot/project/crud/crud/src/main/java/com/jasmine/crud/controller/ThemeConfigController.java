/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddThemeConfigReq;
import com.jasmine.crud.pojo.req.GetThemeConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateThemeConfigReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ThemeConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/theme-config")
public class ThemeConfigController extends ControllerBase {

    @Autowired
    private ThemeConfigService themeConfigService;

    @PostMapping
    public R add(@Validated AddThemeConfigReq req) {
        boolean result = themeConfigService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = themeConfigService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@Validated UpdateThemeConfigReq req) {
        boolean result = themeConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<ThemeConfigDetailResp>> getDetailPage(@Validated GetThemeConfigPageReq req) {
        PageResult<ThemeConfigDetailResp> result = themeConfigService.getDetailPage(req);
        return responseData(result);
    }

}

