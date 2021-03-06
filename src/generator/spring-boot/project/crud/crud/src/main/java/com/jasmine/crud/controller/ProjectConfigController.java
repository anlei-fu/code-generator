/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.entity.ProjectConfig;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddProjectConfigReq;
import com.jasmine.crud.pojo.req.GetProjectConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateProjectConfigReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.ProjectConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/project-config")
public class ProjectConfigController extends ControllerBase {

    @Autowired
    private ProjectConfigService projectConfigService;

    @PostMapping
    public R add(@RequestBody @Validated AddProjectConfigReq req) {
        boolean result = projectConfigService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = projectConfigService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@RequestBody @Validated UpdateProjectConfigReq req) {
        boolean result = projectConfigService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "{id}")
    public R<ProjectConfig> getById(@PathVariable Integer id) {
        ProjectConfig result = projectConfigService.getById(id);
        return responseData(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<ProjectConfigDetailResp>> getDetailPage(@Validated GetProjectConfigPageReq req) {
        PageResult<ProjectConfigDetailResp> result = projectConfigService.getDetailPage(req);
        return responseData(result);
    }

}

