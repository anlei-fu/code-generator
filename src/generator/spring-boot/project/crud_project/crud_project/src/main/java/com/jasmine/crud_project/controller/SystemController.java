package com.jasmine.crud_project.controller;

import com.jasmine.crud_project.pojo.req.AddPProjectConfigReq;
import com.jasmine.crud_project.pojo.resp.ProjectIdsResp;
import com.jasmine.crud_project.pojo.resp.R;
import com.jasmine.crud_project.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sys")
public class SystemController extends ControllerBase {

    @Autowired
    private SystemService service;

    @PostMapping("init")
    public R init(AddPProjectConfigReq req){
        boolean result =service.init(req);
        return  responseBoolean(result);
    }

    @GetMapping("ids/{projectId}")
    public  R<ProjectIdsResp> getIds(@PathVariable Integer projectId){
        ProjectIdsResp result =service.getIds(projectId);
        return responseData(result);
    }
}
