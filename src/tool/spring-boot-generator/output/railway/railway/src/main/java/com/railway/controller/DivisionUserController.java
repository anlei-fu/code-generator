package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DivisionUser;
import com.railway.pojo.req.AddDivisionUserReq;
import com.railway.pojo.req.GetDivisionUserListReq;
import com.railway.pojo.req.UpdateDivisionUserByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DivisionUserService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
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
