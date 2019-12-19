/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDamageRepositoryPositionReq;
import com.test.pojo.req.GetDamageRepositoryPositionListReq;
import com.test.pojo.req.UpdateDamageRepositoryPositionByOrderDetailIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DamageRepositoryPositionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class DamageRepositoryPositionController {

    @Autowired
    private DamageRepositoryPositionService damageRepositoryPositionService;

    @ApiOperation("")
    @PostMapping(path = "/damageRepositoryPosition")
    public R addDamageRepositoryPosition(@Validated @ModelAttribute AddDamageRepositoryPositionReq req) {
        return R.doResponse(damageRepositoryPositionService.addDamageRepositoryPosition(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/damageRepositoryPosition/{orderDetailId}")
    public R deleteDamageRepositoryPositionByOrderDetailId(@PathVariable Integer orderDetailId) {
        return R.doResponse(damageRepositoryPositionService.deleteDamageRepositoryPositionByOrderDetailId(orderDetailId));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/damageRepositoryPosition/{orderDetailId}")
    public R updateDamageRepositoryPositionByOrderDetailId(@PathVariable Integer orderDetailId, @Validated @ModelAttribute UpdateDamageRepositoryPositionByOrderDetailIdReq req) {
        return R.doResponse(damageRepositoryPositionService.updateDamageRepositoryPositionByOrderDetailId(orderDetailId, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageRepositoryPosition/{orderDetailId}")
    public R<DamageRepositoryPosition> getDamageRepositoryPositionByOrderDetailId(@PathVariable Integer orderDetailId) {
        return R.doResponse(damageRepositoryPositionService.getDamageRepositoryPositionByOrderDetailId(orderDetailId));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageRepositoryPosition")
    public R<PageInfo<DamageRepositoryPosition>> getDamageRepositoryPositionList(@Validated @ModelAttribute GetDamageRepositoryPositionListReq req) {
        return R.doResponse(damageRepositoryPositionService.getDamageRepositoryPositionList(req));
    }
}
