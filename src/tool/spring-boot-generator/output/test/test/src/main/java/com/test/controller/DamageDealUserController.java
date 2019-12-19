/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDamageDealUserReq;
import com.test.pojo.req.GetDamageDealUserListReq;
import com.test.pojo.req.UpdateDamageDealUserByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DamageDealUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
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
