package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.LoginUser;
import com.railway.pojo.req.AddLoginUserReq;
import com.railway.pojo.req.GetLoginUserListReq;
import com.railway.pojo.req.UpdateLoginUserByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.LoginUserService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class LoginUserController {

    @Autowired
    private LoginUserService loginUserService;

    @ApiOperation("")
    @PostMapping(path = "/loginUser")
    public R addLoginUser(@Validated @ModelAttribute AddLoginUserReq req) {
        return R.doResponse(loginUserService.addLoginUser(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/loginUser/{id}")
    public R deleteLoginUserById(@PathVariable Integer id) {
        return R.doResponse(loginUserService.deleteLoginUserById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/loginUser/{id}")
    public R updateLoginUserById(@PathVariable Integer id, @Validated @ModelAttribute UpdateLoginUserByIdReq req) {
        return R.doResponse(loginUserService.updateLoginUserById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/loginUser/{id}")
    public R<LoginUser> getLoginUserById(@PathVariable Integer id) {
        return R.doResponse(loginUserService.getLoginUserById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/loginUser")
    public R<PageInfo<LoginUser>> getLoginUserList(@Validated @ModelAttribute GetLoginUserListReq req) {
        return R.doResponse(loginUserService.getLoginUserList(req));
    }

}
