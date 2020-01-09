package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DevicePosition;
import com.railway.pojo.req.AddDevicePositionReq;
import com.railway.pojo.req.GetDevicePositionListReq;
import com.railway.pojo.req.UpdateDevicePositionByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DevicePositionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
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

