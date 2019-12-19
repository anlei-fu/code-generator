/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDamageTypeReq;
import com.test.pojo.req.GetDamageTypeListReq;
import com.test.pojo.req.UpdateDamageTypeByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DamageTypeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class DamageTypeController {

    @Autowired
    private DamageTypeService damageTypeService;

    @ApiOperation("")
    @PostMapping(path = "/damageType")
    public R addDamageType(@Validated @ModelAttribute AddDamageTypeReq req) {
        return R.doResponse(damageTypeService.addDamageType(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/damageType/{id}")
    public R deleteDamageTypeById(@PathVariable Integer id) {
        return R.doResponse(damageTypeService.deleteDamageTypeById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/damageType/{id}")
    public R updateDamageTypeById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDamageTypeByIdReq req) {
        return R.doResponse(damageTypeService.updateDamageTypeById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageType/{id}")
    public R<DamageType> getDamageTypeById(@PathVariable Integer id) {
        return R.doResponse(damageTypeService.getDamageTypeById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageType")
    public R<PageInfo<DamageType>> getDamageTypeList(@Validated @ModelAttribute GetDamageTypeListReq req) {
        return R.doResponse(damageTypeService.getDamageTypeList(req));
    }
}
