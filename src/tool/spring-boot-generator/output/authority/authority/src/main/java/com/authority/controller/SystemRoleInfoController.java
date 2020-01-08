package com.test.controller;

import com.authority.pojo.entity.SystemRoleInfo;
import com.authority.pojo.req.AddSystemRoleInfoReq;
import com.authority.pojo.req.GetSystemRoleInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdReq;
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
    public R addSystemRoleInfo(@Validated @ModelAttribute AddSystemRoleInfoReq req, @Session String user) {
        return R.doResponse(systemRoleInfoService.addSystemRoleInfo(req, user));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/systemRoleInfo/{id}")
    public R deleteSystemRoleInfoByUserAndUserAndUserAndUserAndId(@PathVariable Integer id) {
        return R.doResponse(systemRoleInfoService.deleteSystemRoleInfoByUserAndUserAndUserAndUserAndId(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/systemRoleInfo/{id}")
    public R updateSystemRoleInfoByUserAndUserAndUserAndUserAndId(@PathVariable Integer id, @Validated @ModelAttribute UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdReq req) {
        return R.doResponse(systemRoleInfoService.updateSystemRoleInfoByUserAndUserAndUserAndUserAndId(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemRoleInfo/{id}")
    public R<SystemRoleInfo> getSystemRoleInfoByUserAndUserAndUserAndUserAndId(@PathVariable Integer id) {
        return R.doResponse(systemRoleInfoService.getSystemRoleInfoByUserAndUserAndUserAndUserAndId(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemRoleInfo")
    public R<PageInfo<SystemRoleInfo>> getSystemRoleInfoList(@Validated @ModelAttribute GetSystemRoleInfoListReq req) {
        return R.doResponse(systemRoleInfoService.getSystemRoleInfoList(req));
    }

}
