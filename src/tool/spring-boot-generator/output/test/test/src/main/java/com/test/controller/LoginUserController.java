/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddLoginUserReq;
import com.test.pojo.req.GetLoginUserListReq;
import com.test.pojo.req.UpdateLoginUserByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.LoginUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
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
