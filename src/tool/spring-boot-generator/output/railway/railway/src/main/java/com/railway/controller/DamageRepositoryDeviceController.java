package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.entity.DamageRepositoryDevice;
import com.railway.pojo.req.AddDamageRepositoryDeviceReq;
import com.railway.pojo.req.GetDamageRepositoryDeviceListReq;
import com.railway.pojo.req.UpdateDamageRepositoryDeviceByOrderDetailIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DamageRepositoryDeviceService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class DamageRepositoryDeviceController {

    @Autowired
    private DamageRepositoryDeviceService damageRepositoryDeviceService;

    @ApiOperation("")
    @PostMapping(path = "/damageRepositoryDevice")
    public R addDamageRepositoryDevice(@Validated @ModelAttribute AddDamageRepositoryDeviceReq req) {
        return R.doResponse(damageRepositoryDeviceService.addDamageRepositoryDevice(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/damageRepositoryDevice/{orderDetailId}")
    public R deleteDamageRepositoryDeviceByOrderDetailId(@PathVariable Integer orderDetailId) {
        return R.doResponse(damageRepositoryDeviceService.deleteDamageRepositoryDeviceByOrderDetailId(orderDetailId));
    }

    @ApiOperation("")
    @PutMapping(path = "/damageRepositoryDevice/{orderDetailId}")
    public R updateDamageRepositoryDeviceByOrderDetailId(@PathVariable Integer orderDetailId, @Validated @ModelAttribute UpdateDamageRepositoryDeviceByOrderDetailIdReq req) {
        return R.doResponse(damageRepositoryDeviceService.updateDamageRepositoryDeviceByOrderDetailId(orderDetailId, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/damageRepositoryDevice/{orderDetailId}")
    public R<DamageRepositoryDevice> getDamageRepositoryDeviceByOrderDetailId(@PathVariable Integer orderDetailId) {
        return R.doResponse(damageRepositoryDeviceService.getDamageRepositoryDeviceByOrderDetailId(orderDetailId));
    }

    @ApiOperation("")
    @GetMapping(path = "/damageRepositoryDevice")
    public R<PageInfo<DamageRepositoryDevice>> getDamageRepositoryDeviceList(@Validated @ModelAttribute GetDamageRepositoryDeviceListReq req) {
        return R.doResponse(damageRepositoryDeviceService.getDamageRepositoryDeviceList(req));
    }

}

