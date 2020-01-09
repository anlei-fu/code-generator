package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.BureauLineOrder;
import com.railway.pojo.req.AddBureauLineOrderReq;
import com.railway.pojo.req.GetBureauLineOrderListReq;
import com.railway.pojo.req.UpdateBureauLineOrderByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.BureauLineOrderService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class BureauLineOrderController {

    @Autowired
    private BureauLineOrderService bureauLineOrderService;

    @ApiOperation("")
    @PostMapping(path = "/bureauLineOrder")
    public R addBureauLineOrder(@Validated @ModelAttribute AddBureauLineOrderReq req) {
        return R.doResponse(bureauLineOrderService.addBureauLineOrder(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/bureauLineOrder/{id}")
    public R deleteBureauLineOrderById(@PathVariable Integer id) {
        return R.doResponse(bureauLineOrderService.deleteBureauLineOrderById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/bureauLineOrder/{id}")
    public R updateBureauLineOrderById(@PathVariable Integer id, @Validated @ModelAttribute UpdateBureauLineOrderByIdReq req) {
        return R.doResponse(bureauLineOrderService.updateBureauLineOrderById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/bureauLineOrder/{id}")
    public R<BureauLineOrder> getBureauLineOrderById(@PathVariable Integer id) {
        return R.doResponse(bureauLineOrderService.getBureauLineOrderById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/bureauLineOrder")
    public R<PageInfo<BureauLineOrder>> getBureauLineOrderList(@Validated @ModelAttribute GetBureauLineOrderListReq req) {
        return R.doResponse(bureauLineOrderService.getBureauLineOrderList(req));
    }

}

