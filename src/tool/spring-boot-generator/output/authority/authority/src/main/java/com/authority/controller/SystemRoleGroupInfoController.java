package com.test.controller;

import com.authority.pojo.entity.SystemRoleGroupInfo;
import com.authority.pojo.req.AddSystemRoleGroupInfoReq;
import com.authority.pojo.req.GetSystemRoleGroupInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdReq;
import com.authority.pojo.resp.R;
import com.authority.service.SystemRoleGroupInfoService;
import com.authority.validate.annotation.Path;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class SystemRoleGroupInfoController {

    @Autowired
    private SystemRoleGroupInfoService systemRoleGroupInfoService;

    @ApiOperation("")
    @PostMapping(path = "/systemRoleGroupInfo")
    public R addSystemRoleGroupInfo(@Validated @ModelAttribute AddSystemRoleGroupInfoReq req, @Session String user) {
        return R.doResponse(systemRoleGroupInfoService.addSystemRoleGroupInfo(req, user));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/systemRoleGroupInfo/{id}")
    public R deleteSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(@PathVariable Integer id) {
        return R.doResponse(systemRoleGroupInfoService.deleteSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/systemRoleGroupInfo/{id}")
    public R updateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(@PathVariable Integer id, @Validated @ModelAttribute UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdReq req) {
        return R.doResponse(systemRoleGroupInfoService.updateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemRoleGroupInfo/{id}")
    public R<SystemRoleGroupInfo> getSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(@PathVariable Integer id) {
        return R.doResponse(systemRoleGroupInfoService.getSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemRoleGroupInfo")
    public R<PageInfo<SystemRoleGroupInfo>> getSystemRoleGroupInfoList(@Validated @ModelAttribute GetSystemRoleGroupInfoListReq req) {
        return R.doResponse(systemRoleGroupInfoService.getSystemRoleGroupInfoList(req));
    }

}
