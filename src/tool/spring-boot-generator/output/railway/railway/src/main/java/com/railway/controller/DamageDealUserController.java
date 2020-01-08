package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageDealUser;
import com.railway.pojo.req.AddDamageDealUserReq;
import com.railway.pojo.req.GetDamageDealUserListReq;
import com.railway.pojo.req.UpdateDamageDealUserByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DamageDealUserService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class DamageDealUserController {

    @Autowired
    private DamageDealUserService damageDealUserService;

    @ApiOperation("")
    @PostMapping(path = "/damageDealUser")
    public R addDamageDealUser(@Validated @ModelAttribute AddDamageDealUserReq req) {
        return R.doResponse(damageDealUserService.addDamageDealUser(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/damageDealUser/{id}")
    public R deleteDamageDealUserById(@PathVariable Integer id) {
        return R.doResponse(damageDealUserService.deleteDamageDealUserById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/damageDealUser/{id}")
    public R updateDamageDealUserById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDamageDealUserByIdReq req) {
        return R.doResponse(damageDealUserService.updateDamageDealUserById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/damageDealUser/{id}")
    public R<DamageDealUser> getDamageDealUserById(@PathVariable Integer id) {
        return R.doResponse(damageDealUserService.getDamageDealUserById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/damageDealUser")
    public R<PageInfo<DamageDealUser>> getDamageDealUserList(@Validated @ModelAttribute GetDamageDealUserListReq req) {
        return R.doResponse(damageDealUserService.getDamageDealUserList(req));
    }

}
