package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.entity.DamageRepositoryPosition;
import com.railway.pojo.req.AddDamageRepositoryPositionReq;
import com.railway.pojo.req.GetDamageRepositoryPositionListReq;
import com.railway.pojo.req.UpdateDamageRepositoryPositionByOrderDetailIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DamageRepositoryPositionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
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

