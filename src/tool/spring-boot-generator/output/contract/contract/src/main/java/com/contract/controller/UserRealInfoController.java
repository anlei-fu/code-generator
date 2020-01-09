package com.contract.controller;

import com.contract.pojo.entity.UserRealInfo;
import com.contract.pojo.req.AddUserRealInfoReq;
import com.contract.pojo.req.GetUserRealInfoListReq;
import com.contract.pojo.req.UpdateUserRealInfoByUserIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.UserRealInfoService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class UserRealInfoController {

    @Autowired
    private UserRealInfoService userRealInfoService;

    @ApiOperation("")
    @PostMapping(path = "/userRealInfo")
    public R addUserRealInfo(@Validated @ModelAttribute AddUserRealInfoReq req) {
        return R.doResponse(userRealInfoService.addUserRealInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userRealInfo/{userId}")
    public R deleteUserRealInfoByUserId(@PathVariable Integer userId) {
        return R.doResponse(userRealInfoService.deleteUserRealInfoByUserId(userId));
    }

    @ApiOperation("")
    @PutMapping(path = "/userRealInfo/{userId}")
    public R updateUserRealInfoByUserId(@PathVariable Integer userId, @Validated @ModelAttribute UpdateUserRealInfoByUserIdReq req) {
        return R.doResponse(userRealInfoService.updateUserRealInfoByUserId(userId, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userRealInfo/{userId}")
    public R<UserRealInfo> getUserRealInfoByUserId(@PathVariable Integer userId) {
        return R.doResponse(userRealInfoService.getUserRealInfoByUserId(userId));
    }

    @ApiOperation("")
    @GetMapping(path = "/userRealInfo")
    public R<PageInfo<UserRealInfo>> getUserRealInfoList(@Validated @ModelAttribute GetUserRealInfoListReq req) {
        return R.doResponse(userRealInfoService.getUserRealInfoList(req));
    }

}

