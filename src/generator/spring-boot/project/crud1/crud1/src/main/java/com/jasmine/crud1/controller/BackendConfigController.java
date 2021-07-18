/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.controller;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.pojo.req.AddBackendConfigReq;
import com.jasmine.crud1.pojo.req.GetBackendConfigPageReq;
import com.jasmine.crud1.pojo.req.UpdateBackendConfigReq;
import com.jasmine.crud1.pojo.resp.PageResult;
import com.jasmine.crud1.service.BackendConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/backend-config")
public class BackendConfigController extends ControllerBase {

    @Autowired
    private BackendConfigService backendConfigService;

    @PostMapping
    public R add(@Validated AddBackendConfigReq req) {
        boolean result = backendConfigService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = backendConfigService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@Validated UpdateBackendConfigReq req) {
        boolean result = backendConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<BackendConfigDetailResp>> getDetailPage(@Validated GetBackendConfigPageReq req) {
        PageResult<BackendConfigDetailResp> result = backendConfigService.getDetailPage(req);
        return responseData(result);
    }

}

