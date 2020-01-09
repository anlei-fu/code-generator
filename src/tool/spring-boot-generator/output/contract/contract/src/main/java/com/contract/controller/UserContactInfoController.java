package com.contract.controller;

import com.contract.pojo.entity.UserContactInfo;
import com.contract.pojo.req.AddUserContactInfoReq;
import com.contract.pojo.req.GetUserContactInfoListReq;
import com.contract.pojo.req.UpdateUserContactInfoByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.UserContactInfoService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class UserContactInfoController {

    @Autowired
    private UserContactInfoService userContactInfoService;

    @ApiOperation("")
    @PostMapping(path = "/userContactInfo")
    public R addUserContactInfo(@Validated @ModelAttribute AddUserContactInfoReq req) {
        return R.doResponse(userContactInfoService.addUserContactInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userContactInfo/{id}")
    public R deleteUserContactInfoById(@PathVariable Integer id) {
        return R.doResponse(userContactInfoService.deleteUserContactInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userContactInfo/{id}")
    public R updateUserContactInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserContactInfoByIdReq req) {
        return R.doResponse(userContactInfoService.updateUserContactInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userContactInfo/{id}")
    public R<UserContactInfo> getUserContactInfoById(@PathVariable Integer id) {
        return R.doResponse(userContactInfoService.getUserContactInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userContactInfo")
    public R<PageInfo<UserContactInfo>> getUserContactInfoList(@Validated @ModelAttribute GetUserContactInfoListReq req) {
        return R.doResponse(userContactInfoService.getUserContactInfoList(req));
    }

}

