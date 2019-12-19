/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDeviceDamageMapReq;
import com.test.pojo.req.GetDeviceDamageMapListReq;
import com.test.pojo.req.UpdateDeviceDamageMapByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DeviceDamageMapService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class DeviceDamageMapController {

    @Autowired
    private DeviceDamageMapService deviceDamageMapService;

    @ApiOperation("")
    @PostMapping(path = "/deviceDamageMap")
    public R addDeviceDamageMap(@Validated @ModelAttribute AddDeviceDamageMapReq req) {
        return R.doResponse(deviceDamageMapService.addDeviceDamageMap(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/deviceDamageMap/{id}")
    public R deleteDeviceDamageMapById(@PathVariable Integer id) {
        return R.doResponse(deviceDamageMapService.deleteDeviceDamageMapById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/deviceDamageMap/{id}")
    public R updateDeviceDamageMapById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDeviceDamageMapByIdReq req) {
        return R.doResponse(deviceDamageMapService.updateDeviceDamageMapById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/deviceDamageMap/{id}")
    public R<DeviceDamageMap> getDeviceDamageMapById(@PathVariable Integer id) {
        return R.doResponse(deviceDamageMapService.getDeviceDamageMapById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/deviceDamageMap")
    public R<PageInfo<DeviceDamageMap>> getDeviceDamageMapList(@Validated @ModelAttribute GetDeviceDamageMapListReq req) {
        return R.doResponse(deviceDamageMapService.getDeviceDamageMapList(req));
    }
}
