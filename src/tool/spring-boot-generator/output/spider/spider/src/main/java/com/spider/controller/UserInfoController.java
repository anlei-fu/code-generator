package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.UserInfo;
import com.spider.pojo.req.AddUserInfoReq;
import com.spider.pojo.req.GetUserInfoListReq;
import com.spider.pojo.req.UpdateUserInfoByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.UserInfoService;
import com.spider.validate.annotation.Path;
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
    @DeleteMapping(path = "/userInfo/{id}")
    public R deleteUserInfoById(@PathVariable Integer id) {
        return R.doResponse(userInfoService.deleteUserInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userInfo/{id}")
    public R updateUserInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserInfoByIdReq req) {
        return R.doResponse(userInfoService.updateUserInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userInfo/{id}")
    public R<UserInfo> getUserInfoById(@PathVariable Integer id) {
        return R.doResponse(userInfoService.getUserInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userInfo")
    public R<PageInfo<UserInfo>> getUserInfoList(@Validated @ModelAttribute GetUserInfoListReq req) {
        return R.doResponse(userInfoService.getUserInfoList(req));
    }

}
