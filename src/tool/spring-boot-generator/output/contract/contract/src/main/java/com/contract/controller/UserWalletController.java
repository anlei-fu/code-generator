package com.contract.controller;

import com.contract.pojo.entity.UserWallet;
import com.contract.pojo.req.AddUserWalletReq;
import com.contract.pojo.req.GetUserWalletListReq;
import com.contract.pojo.req.UpdateUserWalletByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.UserWalletService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class UserWalletController {

    @Autowired
    private UserWalletService userWalletService;

    @ApiOperation("")
    @PostMapping(path = "/userWallet")
    public R addUserWallet(@Validated @ModelAttribute AddUserWalletReq req) {
        return R.doResponse(userWalletService.addUserWallet(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userWallet/{id}")
    public R deleteUserWalletById(@PathVariable Integer id) {
        return R.doResponse(userWalletService.deleteUserWalletById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userWallet/{id}")
    public R updateUserWalletById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserWalletByIdReq req) {
        return R.doResponse(userWalletService.updateUserWalletById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userWallet/{id}")
    public R<UserWallet> getUserWalletById(@PathVariable Integer id) {
        return R.doResponse(userWalletService.getUserWalletById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userWallet")
    public R<PageInfo<UserWallet>> getUserWalletList(@Validated @ModelAttribute GetUserWalletListReq req) {
        return R.doResponse(userWalletService.getUserWalletList(req));
    }

}

