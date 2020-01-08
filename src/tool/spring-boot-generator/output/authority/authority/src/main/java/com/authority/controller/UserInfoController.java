package com.test.controller;

import com.authority.pojo.entity.UserInfo;
import com.authority.pojo.req.AddUserInfoReq;
import com.authority.pojo.req.GetUserInfoListReq;
import com.authority.pojo.req.UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq;
import com.authority.pojo.resp.R;
import com.authority.service.UserInfoService;
import com.authority.validate.annotation.Path;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @ApiOperation("")
    @PostMapping(path = "/userInfo")
    public R addUserInfo(@Validated @ModelAttribute AddUserInfoReq req, @Session String user) {
        return R.doResponse(userInfoService.addUserInfo(req, user));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userInfo/{account}")
    public R deleteUserInfoByUserAndUserAndUserAndUserAndAccount(@PathVariable String account) {
        return R.doResponse(userInfoService.deleteUserInfoByUserAndUserAndUserAndUserAndAccount(account));
    }

    @ApiOperation("")
    @PutMapping(path = "/userInfo/{account}")
    public R updateUserInfoByUserAndUserAndUserAndUserAndAccount(@PathVariable String account, @Validated @ModelAttribute UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq req) {
        return R.doResponse(userInfoService.updateUserInfoByUserAndUserAndUserAndUserAndAccount(account, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userInfo/{account}")
    public R<UserInfo> getUserInfoByUserAndUserAndUserAndUserAndAccount(@PathVariable String account) {
        return R.doResponse(userInfoService.getUserInfoByUserAndUserAndUserAndUserAndAccount(account));
    }

    @ApiOperation("")
    @GetMapping(path = "/userInfo")
    public R<PageInfo<UserInfo>> getUserInfoList(@Validated @ModelAttribute GetUserInfoListReq req) {
        return R.doResponse(userInfoService.getUserInfoList(req));
    }

}
