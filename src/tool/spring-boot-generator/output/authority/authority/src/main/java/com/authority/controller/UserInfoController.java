package com.test.controller;

import com.authority.pojo.entity.UserInfo;
import com.authority.pojo.req.AddUserInfoReq;
import com.authority.pojo.req.GetUserInfoListReq;
import com.authority.pojo.req.UpdateUserInfoByAccountReq;
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
    public R addUserInfo(@Validated @ModelAttribute AddUserInfoReq req) {
        return R.doResponse(userInfoService.addUserInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userInfo/{account}")
    public R deleteUserInfoByAccount(@PathVariable Integer account) {
        return R.doResponse(userInfoService.deleteUserInfoByAccount(account));
    }

    @ApiOperation("")
    @PutMapping(path = "/userInfo/{account}")
    public R updateUserInfoByAccount(@PathVariable Integer account, @Validated @ModelAttribute UpdateUserInfoByAccountReq req) {
        return R.doResponse(userInfoService.updateUserInfoByAccount(account, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userInfo/{account}")
    public R<UserInfo> getUserInfoByAccount(@PathVariable Integer account) {
        return R.doResponse(userInfoService.getUserInfoByAccount(account));
    }

    @ApiOperation("")
    @GetMapping(path = "/userInfo")
    public R<PageInfo<UserInfo>> getUserInfoList(@Validated @ModelAttribute GetUserInfoListReq req) {
        return R.doResponse(userInfoService.getUserInfoList(req));
    }

}
