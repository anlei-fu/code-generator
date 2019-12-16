package com.spider.controller;

import com.spider.pojo.dao.WorkerInfo;
import com.spider.pojo.resp.R;
import com.spider.service.WorkerInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "")
@RestController
public class WorkerInfoController {

    @Autowired
    private WorkerInfoService workerInfoService;

    @ApiOperation("")
    GetMapping(path="/workerInfo/{id}")
    public R<GetWorkerInfoByIdResp> getWorkerInfoById(@PathVarible Integer id, @Validated @ModelAttribute GetWorkerInfoByIdReq req) {
        return R.doResponse(() -> workerInfoService.getWorkerInfoById(id, req));
    }
    @ApiOperation("")
    DeleteMapping(path="/workerInfo/{id}")
    public R deleteWorkerInfoById(@PathVarible Integer id) {
        return R.doResponse(() -> workerInfoService.deleteWorkerInfoById(id));
    }
    @ApiOperation("")
    GetMapping(path="/workerInfo/getWorkerInfoByIp")
    public R<PageInfo<WorkerInfo>> getWorkerInfoByIp(String ip) {
        return R.doResponse(() -> workerInfoService.getWorkerInfoByIp(ip));
    }
    
}
