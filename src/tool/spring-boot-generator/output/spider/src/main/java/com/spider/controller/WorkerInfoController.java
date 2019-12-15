package com.@project.controller;

import com.spider.pojo.dao.WorkerInfo;
import com.spider.pojo.resp.R;
import com.@project.service.WorkerInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "worker info")
@RestController
public class WorkerInfoController {

    @Autowired
    private WorkerInfoService service;

    GetMapping(path="/workerInfo/GetById")
    @ApiOperation("")
    public R<GetByIdResp> GetById(@PathVarible Integer id) {
        return R.doResponse(() -> service.GetById(id));
    }
    
}
