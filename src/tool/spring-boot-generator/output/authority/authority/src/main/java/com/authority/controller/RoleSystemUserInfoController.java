package com.test.controller;

import com.authority.pojo.entity.RoleSystemUserInfo;
import com.authority.pojo.req.AddRoleSystemUserInfoReq;
import com.authority.pojo.req.GetRoleSystemUserInfoListReq;
import com.authority.pojo.req.UpdateRoleSystemUserInfoByAccountReq;
import com.authority.pojo.resp.R;
import com.authority.service.RoleSystemUserInfoService;
import com.authority.validate.annotation.Path;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class RoleSystemUserInfoController {

    @Autowired
    private RoleSystemUserInfoService roleSystemUserInfoService;

    @ApiOperation("")
    @PostMapping(path = "/roleSystemUserInfo")
    public R addRoleSystemUserInfo(@Validated @ModelAttribute AddRoleSystemUserInfoReq req) {
        return R.doResponse(roleSystemUserInfoService.addRoleSystemUserInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/roleSystemUserInfo/{account}")
    public R deleteRoleSystemUserInfoByAccount(@PathVariable Integer account) {
        return R.doResponse(roleSystemUserInfoService.deleteRoleSystemUserInfoByAccount(account));
    }

    @ApiOperation("")
    @PutMapping(path = "/roleSystemUserInfo/{account}")
    public R updateRoleSystemUserInfoByAccount(@PathVariable Integer account, @Validated @ModelAttribute UpdateRoleSystemUserInfoByAccountReq req) {
        return R.doResponse(roleSystemUserInfoService.updateRoleSystemUserInfoByAccount(account, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/roleSystemUserInfo/{account}")
    public R<RoleSystemUserInfo> getRoleSystemUserInfoByAccount(@PathVariable Integer account) {
        return R.doResponse(roleSystemUserInfoService.getRoleSystemUserInfoByAccount(account));
    }

    @ApiOperation("")
    @GetMapping(path = "/roleSystemUserInfo")
    public R<PageInfo<RoleSystemUserInfo>> getRoleSystemUserInfoList(@Validated @ModelAttribute GetRoleSystemUserInfoListReq req) {
        return R.doResponse(roleSystemUserInfoService.getRoleSystemUserInfoList(req));
    }

}
