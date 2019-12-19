/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddBridgeInfoReq;
import com.test.pojo.req.GetBridgeInfoListReq;
import com.test.pojo.req.UpdateBridgeInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.BridgeInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
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
