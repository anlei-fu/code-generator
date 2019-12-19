/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDivisionUserReq;
import com.test.pojo.req.GetDivisionUserListReq;
import com.test.pojo.req.UpdateDivisionUserByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DivisionUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class DivisionUserController {

    @Autowired
    private DivisionUserService divisionUserService;

    @ApiOperation("")
    @PostMapping(path = "/divisionUser")
    public R addDivisionUser(@Validated @ModelAttribute AddDivisionUserReq req) {
        return R.doResponse(divisionUserService.addDivisionUser(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/divisionUser/{id}")
    public R deleteDivisionUserById(@PathVariable Integer id) {
        return R.doResponse(divisionUserService.deleteDivisionUserById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/divisionUser/{id}")
    public R updateDivisionUserById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDivisionUserByIdReq req) {
        return R.doResponse(divisionUserService.updateDivisionUserById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/divisionUser/{id}")
    public R<DivisionUser> getDivisionUserById(@PathVariable Integer id) {
        return R.doResponse(divisionUserService.getDivisionUserById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/divisionUser")
    public R<PageInfo<DivisionUser>> getDivisionUserList(@Validated @ModelAttribute GetDivisionUserListReq req) {
        return R.doResponse(divisionUserService.getDivisionUserList(req));
    }
}
