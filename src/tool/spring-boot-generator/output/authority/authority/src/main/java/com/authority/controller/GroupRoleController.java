package com.test.controller;

import com.authority.pojo.entity.GroupRole;
import com.authority.pojo.req.AddGroupRoleReq;
import com.authority.pojo.req.GetGroupRoleListReq;
import com.authority.pojo.req.UpdateGroupRoleByUserAndUserAndUserAndUserAndIdReq;
import com.authority.pojo.resp.R;
import com.authority.service.GroupRoleService;
import com.authority.validate.annotation.Path;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class GroupRoleController {

    @Autowired
    private GroupRoleService groupRoleService;

    @ApiOperation("")
    @PostMapping(path = "/groupRole")
    public R addGroupRole(@Validated @ModelAttribute AddGroupRoleReq req, @Session String user) {
        return R.doResponse(groupRoleService.addGroupRole(req, user));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/groupRole/{id}")
    public R deleteGroupRoleByUserAndUserAndUserAndUserAndId(@PathVariable Integer id) {
        return R.doResponse(groupRoleService.deleteGroupRoleByUserAndUserAndUserAndUserAndId(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/groupRole/{id}")
    public R updateGroupRoleByUserAndUserAndUserAndUserAndId(@PathVariable Integer id, @Validated @ModelAttribute UpdateGroupRoleByUserAndUserAndUserAndUserAndIdReq req) {
        return R.doResponse(groupRoleService.updateGroupRoleByUserAndUserAndUserAndUserAndId(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/groupRole/{id}")
    public R<GroupRole> getGroupRoleByUserAndUserAndUserAndUserAndId(@PathVariable Integer id) {
        return R.doResponse(groupRoleService.getGroupRoleByUserAndUserAndUserAndUserAndId(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/groupRole")
    public R<PageInfo<GroupRole>> getGroupRoleList(@Validated @ModelAttribute GetGroupRoleListReq req) {
        return R.doResponse(groupRoleService.getGroupRoleList(req));
    }

}
