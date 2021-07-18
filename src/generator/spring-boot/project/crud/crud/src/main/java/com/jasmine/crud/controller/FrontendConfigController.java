/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.entity.FrontendConfig;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddFrontendConfigReq;
import com.jasmine.crud.pojo.req.GetFrontendConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateFrontendConfigReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.FrontendConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/frontend-config")
public class FrontendConfigController extends ControllerBase {

    @Autowired
    private FrontendConfigService frontendConfigService;

    @PostMapping
    public R add(@RequestBody @Validated AddFrontendConfigReq req) {
        boolean result = frontendConfigService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = frontendConfigService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@RequestBody @Validated UpdateFrontendConfigReq req) {
        boolean result = frontendConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<FrontendConfig> getById(@PathVariable Integer id) {
        FrontendConfig result = frontendConfigService.getById(id);
        return responseData(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<FrontendConfigDetailResp>> getDetailPage(@Validated GetFrontendConfigPageReq req) {
        PageResult<FrontendConfigDetailResp> result = frontendConfigService.getDetailPage(req);
        return responseData(result);
    }

}

