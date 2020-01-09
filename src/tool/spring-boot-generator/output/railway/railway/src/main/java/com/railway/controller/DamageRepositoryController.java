package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.req.AddDamageRepositoryReq;
import com.railway.pojo.req.GetDamageRepositoryListReq;
import com.railway.pojo.req.UpdateDamageRepositoryByOrderDetailIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DamageRepositoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class DamageRepositoryController {

    @Autowired
    private DamageRepositoryService damageRepositoryService;

    @ApiOperation("")
    @PostMapping(path = "/damageRepository")
    public R addDamageRepository(@Validated @ModelAttribute AddDamageRepositoryReq req) {
        return R.doResponse(damageRepositoryService.addDamageRepository(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/damageRepository/{orderDetailId}")
    public R deleteDamageRepositoryByOrderDetailId(@PathVariable Integer orderDetailId) {
        return R.doResponse(damageRepositoryService.deleteDamageRepositoryByOrderDetailId(orderDetailId));
    }

    @ApiOperation("")
    @PutMapping(path = "/damageRepository/{orderDetailId}")
    public R updateDamageRepositoryByOrderDetailId(@PathVariable Integer orderDetailId, @Validated @ModelAttribute UpdateDamageRepositoryByOrderDetailIdReq req) {
        return R.doResponse(damageRepositoryService.updateDamageRepositoryByOrderDetailId(orderDetailId, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/damageRepository/{orderDetailId}")
    public R<DamageRepository> getDamageRepositoryByOrderDetailId(@PathVariable Integer orderDetailId) {
        return R.doResponse(damageRepositoryService.getDamageRepositoryByOrderDetailId(orderDetailId));
    }

    @ApiOperation("")
    @GetMapping(path = "/damageRepository")
    public R<PageInfo<DamageRepository>> getDamageRepositoryList(@Validated @ModelAttribute GetDamageRepositoryListReq req) {
        return R.doResponse(damageRepositoryService.getDamageRepositoryList(req));
    }

}

