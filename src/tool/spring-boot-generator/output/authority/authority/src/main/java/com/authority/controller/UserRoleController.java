package com.test.controller;

import com.authority.pojo.entity.UserRole;
import com.authority.pojo.req.AddUserRoleReq;
import com.authority.pojo.req.GetUserRoleListReq;
import com.authority.pojo.req.UpdateUserRoleByIdReq;
import com.authority.pojo.resp.R;
import com.authority.service.UserRoleService;
import com.authority.validate.annotation.Path;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class UserRoleController {

    @Autowired
    private UserRoleService userRoleService;

    @ApiOperation("")
    @PostMapping(path = "/userRole")
    public R addUserRole(@Validated @ModelAttribute AddUserRoleReq req) {
        return R.doResponse(userRoleService.addUserRole(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userRole/{id}")
    public R deleteUserRoleById(@PathVariable Integer id) {
        return R.doResponse(userRoleService.deleteUserRoleById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userRole/{id}")
    public R updateUserRoleById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserRoleByIdReq req) {
        return R.doResponse(userRoleService.updateUserRoleById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userRole/{id}")
    public R<UserRole> getUserRoleById(@PathVariable Integer id) {
        return R.doResponse(userRoleService.getUserRoleById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userRole")
    public R<PageInfo<UserRole>> getUserRoleList(@Validated @ModelAttribute GetUserRoleListReq req) {
        return R.doResponse(userRoleService.getUserRoleList(req));
    }

}
