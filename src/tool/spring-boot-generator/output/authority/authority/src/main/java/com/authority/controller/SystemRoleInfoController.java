package com.test.controller;

import com.authority.pojo.entity.SystemRoleInfo;
import com.authority.pojo.req.AddSystemRoleInfoReq;
import com.authority.pojo.req.GetSystemRoleInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleInfoByIdReq;
import com.authority.pojo.resp.R;
import com.authority.service.SystemRoleInfoService;
import com.authority.validate.annotation.Path;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class SystemRoleInfoController {

    @Autowired
    private SystemRoleInfoService systemRoleInfoService;

    @ApiOperation("")
    @PostMapping(path = "/systemRoleInfo")
    public R addSystemRoleInfo(@Validated @ModelAttribute AddSystemRoleInfoReq req) {
        return R.doResponse(systemRoleInfoService.addSystemRoleInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/systemRoleInfo/{id}")
    public R deleteSystemRoleInfoById(@PathVariable Integer id) {
        return R.doResponse(systemRoleInfoService.deleteSystemRoleInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/systemRoleInfo/{id}")
    public R updateSystemRoleInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSystemRoleInfoByIdReq req) {
        return R.doResponse(systemRoleInfoService.updateSystemRoleInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemRoleInfo/{id}")
    public R<SystemRoleInfo> getSystemRoleInfoById(@PathVariable Integer id) {
        return R.doResponse(systemRoleInfoService.getSystemRoleInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemRoleInfo")
    public R<PageInfo<SystemRoleInfo>> getSystemRoleInfoList(@Validated @ModelAttribute GetSystemRoleInfoListReq req) {
        return R.doResponse(systemRoleInfoService.getSystemRoleInfoList(req));
    }

}
