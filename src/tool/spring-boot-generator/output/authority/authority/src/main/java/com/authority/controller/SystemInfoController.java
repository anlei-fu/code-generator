package com.test.controller;

import com.authority.pojo.entity.SystemInfo;
import com.authority.pojo.req.AddSystemInfoReq;
import com.authority.pojo.req.GetSystemInfoListReq;
import com.authority.pojo.req.UpdateSystemInfoByUserAndUserAndUserAndUserAndIdReq;
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
    public R addSystemInfo(@Validated @ModelAttribute AddSystemInfoReq req, @Session String user) {
        return R.doResponse(systemInfoService.addSystemInfo(req, user));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/systemInfo/{id}")
    public R deleteSystemInfoByUserAndUserAndUserAndUserAndId(@PathVariable Integer id) {
        return R.doResponse(systemInfoService.deleteSystemInfoByUserAndUserAndUserAndUserAndId(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/systemInfo/{id}")
    public R updateSystemInfoByUserAndUserAndUserAndUserAndId(@PathVariable Integer id, @Validated @ModelAttribute UpdateSystemInfoByUserAndUserAndUserAndUserAndIdReq req) {
        return R.doResponse(systemInfoService.updateSystemInfoByUserAndUserAndUserAndUserAndId(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemInfo/{id}")
    public R<SystemInfo> getSystemInfoByUserAndUserAndUserAndUserAndId(@PathVariable Integer id) {
        return R.doResponse(systemInfoService.getSystemInfoByUserAndUserAndUserAndUserAndId(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemInfo")
    public R<PageInfo<SystemInfo>> getSystemInfoList(@Validated @ModelAttribute GetSystemInfoListReq req) {
        return R.doResponse(systemInfoService.getSystemInfoList(req));
    }

}
