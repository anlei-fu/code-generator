package com.contract.controller;

import com.contract.pojo.entity.UserSignSeal;
import com.contract.pojo.req.AddUserSignSealReq;
import com.contract.pojo.req.GetUserSignSealListReq;
import com.contract.pojo.req.UpdateUserSignSealByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.UserSignSealService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class UserSignSealController {

    @Autowired
    private UserSignSealService userSignSealService;

    @ApiOperation("")
    @PostMapping(path = "/userSignSeal")
    public R addUserSignSeal(@Validated @ModelAttribute AddUserSignSealReq req) {
        return R.doResponse(userSignSealService.addUserSignSeal(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userSignSeal/{id}")
    public R deleteUserSignSealById(@PathVariable Integer id) {
        return R.doResponse(userSignSealService.deleteUserSignSealById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userSignSeal/{id}")
    public R updateUserSignSealById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserSignSealByIdReq req) {
        return R.doResponse(userSignSealService.updateUserSignSealById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userSignSeal/{id}")
    public R<UserSignSeal> getUserSignSealById(@PathVariable Integer id) {
        return R.doResponse(userSignSealService.getUserSignSealById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userSignSeal")
    public R<PageInfo<UserSignSeal>> getUserSignSealList(@Validated @ModelAttribute GetUserSignSealListReq req) {
        return R.doResponse(userSignSealService.getUserSignSealList(req));
    }

}

