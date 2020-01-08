package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageOrder;
import com.railway.pojo.req.AddDamageOrderReq;
import com.railway.pojo.req.GetDamageOrderListReq;
import com.railway.pojo.req.UpdateDamageOrderByOrderNoReq;
import com.railway.pojo.resp.R;
import com.railway.service.DamageOrderService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class DamageOrderController {

    @Autowired
    private DamageOrderService damageOrderService;

    @ApiOperation("")
    @PostMapping(path = "/damageOrder")
    public R addDamageOrder(@Validated @ModelAttribute AddDamageOrderReq req) {
        return R.doResponse(damageOrderService.addDamageOrder(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/damageOrder/{orderNo}")
    public R deleteDamageOrderByOrderNo(@PathVariable Integer orderNo) {
        return R.doResponse(damageOrderService.deleteDamageOrderByOrderNo(orderNo));
    }

    @ApiOperation("")
    @PutMapping(path = "/damageOrder/{orderNo}")
    public R updateDamageOrderByOrderNo(@PathVariable Integer orderNo, @Validated @ModelAttribute UpdateDamageOrderByOrderNoReq req) {
        return R.doResponse(damageOrderService.updateDamageOrderByOrderNo(orderNo, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/damageOrder/{orderNo}")
    public R<DamageOrder> getDamageOrderByOrderNo(@PathVariable Integer orderNo) {
        return R.doResponse(damageOrderService.getDamageOrderByOrderNo(orderNo));
    }

    @ApiOperation("")
    @GetMapping(path = "/damageOrder")
    public R<PageInfo<DamageOrder>> getDamageOrderList(@Validated @ModelAttribute GetDamageOrderListReq req) {
        return R.doResponse(damageOrderService.getDamageOrderList(req));
    }

}
