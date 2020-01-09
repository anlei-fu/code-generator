package com.contract.controller;

import com.contract.pojo.entity.UserCompanyInfo;
import com.contract.pojo.req.AddUserCompanyInfoReq;
import com.contract.pojo.req.GetUserCompanyInfoListReq;
import com.contract.pojo.req.UpdateUserCompanyInfoByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.UserCompanyInfoService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class UserCompanyInfoController {

    @Autowired
    private UserCompanyInfoService userCompanyInfoService;

    @ApiOperation("")
    @PostMapping(path = "/userCompanyInfo")
    public R addUserCompanyInfo(@Validated @ModelAttribute AddUserCompanyInfoReq req) {
        return R.doResponse(userCompanyInfoService.addUserCompanyInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userCompanyInfo/{id}")
    public R deleteUserCompanyInfoById(@PathVariable Integer id) {
        return R.doResponse(userCompanyInfoService.deleteUserCompanyInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userCompanyInfo/{id}")
    public R updateUserCompanyInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserCompanyInfoByIdReq req) {
        return R.doResponse(userCompanyInfoService.updateUserCompanyInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userCompanyInfo/{id}")
    public R<UserCompanyInfo> getUserCompanyInfoById(@PathVariable Integer id) {
        return R.doResponse(userCompanyInfoService.getUserCompanyInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userCompanyInfo")
    public R<PageInfo<UserCompanyInfo>> getUserCompanyInfoList(@Validated @ModelAttribute GetUserCompanyInfoListReq req) {
        return R.doResponse(userCompanyInfoService.getUserCompanyInfoList(req));
    }

}

