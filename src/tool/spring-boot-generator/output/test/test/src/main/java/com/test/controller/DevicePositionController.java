/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDevicePositionReq;
import com.test.pojo.req.GetDevicePositionListReq;
import com.test.pojo.req.UpdateDevicePositionByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DevicePositionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class DevicePositionController {

    @Autowired
    private DevicePositionService devicePositionService;

    @ApiOperation("")
    @PostMapping(path = "/devicePosition")
    public R addDevicePosition(@Validated @ModelAttribute AddDevicePositionReq req) {
        return R.doResponse(devicePositionService.addDevicePosition(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/devicePosition/{id}")
    public R deleteDevicePositionById(@PathVariable Integer id) {
        return R.doResponse(devicePositionService.deleteDevicePositionById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/devicePosition/{id}")
    public R updateDevicePositionById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDevicePositionByIdReq req) {
        return R.doResponse(devicePositionService.updateDevicePositionById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/devicePosition/{id}")
    public R<DevicePosition> getDevicePositionById(@PathVariable Integer id) {
        return R.doResponse(devicePositionService.getDevicePositionById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/devicePosition")
    public R<PageInfo<DevicePosition>> getDevicePositionList(@Validated @ModelAttribute GetDevicePositionListReq req) {
        return R.doResponse(devicePositionService.getDevicePositionList(req));
    }
}
