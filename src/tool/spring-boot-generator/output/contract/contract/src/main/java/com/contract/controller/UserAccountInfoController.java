package com.contract.controller;

import com.contract.pojo.entity.UserAccountInfo;
import com.contract.pojo.req.AddUserAccountInfoReq;
import com.contract.pojo.req.GetUserAccountInfoListReq;
import com.contract.pojo.req.UpdateUserAccountInfoByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.UserAccountInfoService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class UserAccountInfoController {

    @Autowired
    private UserAccountInfoService userAccountInfoService;

    @ApiOperation("")
    @PostMapping(path = "/userAccountInfo")
    public R addUserAccountInfo(@Validated @ModelAttribute AddUserAccountInfoReq req) {
        return R.doResponse(userAccountInfoService.addUserAccountInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userAccountInfo/{id}")
    public R deleteUserAccountInfoById(@PathVariable Integer id) {
        return R.doResponse(userAccountInfoService.deleteUserAccountInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userAccountInfo/{id}")
    public R updateUserAccountInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserAccountInfoByIdReq req) {
        return R.doResponse(userAccountInfoService.updateUserAccountInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userAccountInfo/{id}")
    public R<UserAccountInfo> getUserAccountInfoById(@PathVariable Integer id) {
        return R.doResponse(userAccountInfoService.getUserAccountInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userAccountInfo")
    public R<PageInfo<UserAccountInfo>> getUserAccountInfoList(@Validated @ModelAttribute GetUserAccountInfoListReq req) {
        return R.doResponse(userAccountInfoService.getUserAccountInfoList(req));
    }

}

