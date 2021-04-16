/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.entity.ThemeConfig;
import com.jasmine.crud.pojo.req.AddThemeConfigReq;
import com.jasmine.crud.pojo.req.GetThemeConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateThemeConfigBatchReq;
import com.jasmine.crud.pojo.req.UpdateThemeConfigReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.pojo.resp.R;
import com.jasmine.crud.service.ThemeConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("dictionary")
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

    @DeleteMapping(path = "delete-batch")
    public R deleteBatch(List<Integer> ids) {
        int expected = ids.size();
        int succeed = themeConfigService.deleteBatch(ids);
        return responseBatch(succeed, expected);
    }

    @PutMapping
    public R update(@Validated UpdateThemeConfigReq req) {
        boolean result = themeConfigService.update(req);
        return responseBoolean(result);
    }

    @PutMapping(path = "update-batch")
    public R updateBatch(@Validated UpdateThemeConfigBatchReq req) {
        int expected = req.getIds().size();
        int succeed = themeConfigService.updateBatch(req);
        return responseBatch(succeed, expected);
    }

    @GetMapping(path = "{id}")
    public R<ThemeConfig> getById(@PathVariable Integer id) {
        ThemeConfig result = themeConfigService.getById(id);
        return responseData(result);
    }

    @GetMapping(path = "/page")
    public R<PageResult<ThemeConfig>> getPage(@Validated GetThemeConfigPageReq req) {
        PageResult<ThemeConfig> result = themeConfigService.getPage(req);
        return responseData(result);
    }

}

