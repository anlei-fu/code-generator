package com.test.controller;

import com.authority.pojo.entity.SystemInfo;
import com.authority.pojo.req.AddSystemInfoReq;
import com.authority.pojo.req.GetSystemInfoListReq;
import com.authority.pojo.req.UpdateSystemInfoByIdReq;
import com.authority.pojo.resp.R;
import com.authority.service.SystemInfoService;
import com.authority.validate.annotation.Path;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class SystemInfoController {

    @Autowired
    private SystemInfoService systemInfoService;

    @ApiOperation("")
    @PostMapping(path = "/systemInfo")
    public R addSystemInfo(@Validated @ModelAttribute AddSystemInfoReq req) {
        return R.doResponse(systemInfoService.addSystemInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/systemInfo/{id}")
    public R deleteSystemInfoById(@PathVariable Integer id) {
        return R.doResponse(systemInfoService.deleteSystemInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/systemInfo/{id}")
    public R updateSystemInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSystemInfoByIdReq req) {
        return R.doResponse(systemInfoService.updateSystemInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemInfo/{id}")
    public R<SystemInfo> getSystemInfoById(@PathVariable Integer id) {
        return R.doResponse(systemInfoService.getSystemInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemInfo")
    public R<PageInfo<SystemInfo>> getSystemInfoList(@Validated @ModelAttribute GetSystemInfoListReq req) {
        return R.doResponse(systemInfoService.getSystemInfoList(req));
    }

}
