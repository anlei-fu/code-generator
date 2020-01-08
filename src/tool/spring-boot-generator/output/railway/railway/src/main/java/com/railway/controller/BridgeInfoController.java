package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.BridgeInfo;
import com.railway.pojo.req.AddBridgeInfoReq;
import com.railway.pojo.req.GetBridgeInfoListReq;
import com.railway.pojo.req.UpdateBridgeInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.BridgeInfoService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class BridgeInfoController {

    @Autowired
    private BridgeInfoService bridgeInfoService;

    @ApiOperation("")
    @PostMapping(path = "/bridgeInfo")
    public R addBridgeInfo(@Validated @ModelAttribute AddBridgeInfoReq req) {
        return R.doResponse(bridgeInfoService.addBridgeInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/bridgeInfo/{id}")
    public R deleteBridgeInfoById(@PathVariable Integer id) {
        return R.doResponse(bridgeInfoService.deleteBridgeInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/bridgeInfo/{id}")
    public R updateBridgeInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateBridgeInfoByIdReq req) {
        return R.doResponse(bridgeInfoService.updateBridgeInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/bridgeInfo/{id}")
    public R<BridgeInfo> getBridgeInfoById(@PathVariable Integer id) {
        return R.doResponse(bridgeInfoService.getBridgeInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/bridgeInfo")
    public R<PageInfo<BridgeInfo>> getBridgeInfoList(@Validated @ModelAttribute GetBridgeInfoListReq req) {
        return R.doResponse(bridgeInfoService.getBridgeInfoList(req));
    }

}
