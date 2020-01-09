package com.contract.controller;

import com.contract.pojo.entity.SystemLog;
import com.contract.pojo.req.AddSystemLogReq;
import com.contract.pojo.req.GetSystemLogListReq;
import com.contract.pojo.req.UpdateSystemLogByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.SystemLogService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class SystemLogController {

    @Autowired
    private SystemLogService systemLogService;

    @ApiOperation("")
    @PostMapping(path = "/systemLog")
    public R addSystemLog(@Validated @ModelAttribute AddSystemLogReq req) {
        return R.doResponse(systemLogService.addSystemLog(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/systemLog/{id}")
    public R deleteSystemLogById(@PathVariable Integer id) {
        return R.doResponse(systemLogService.deleteSystemLogById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/systemLog/{id}")
    public R updateSystemLogById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSystemLogByIdReq req) {
        return R.doResponse(systemLogService.updateSystemLogById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemLog/{id}")
    public R<SystemLog> getSystemLogById(@PathVariable Integer id) {
        return R.doResponse(systemLogService.getSystemLogById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemLog")
    public R<PageInfo<SystemLog>> getSystemLogList(@Validated @ModelAttribute GetSystemLogListReq req) {
        return R.doResponse(systemLogService.getSystemLogList(req));
    }

}

