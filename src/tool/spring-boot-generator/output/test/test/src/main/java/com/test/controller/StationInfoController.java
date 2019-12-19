/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddStationInfoReq;
import com.test.pojo.req.GetStationInfoListReq;
import com.test.pojo.req.UpdateStationInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.StationInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class StationInfoController {

    @Autowired
    private StationInfoService stationInfoService;

    @ApiOperation("")
    @PostMapping(path = "/stationInfo")
    public R addStationInfo(@Validated @ModelAttribute AddStationInfoReq req) {
        return R.doResponse(stationInfoService.addStationInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/stationInfo/{id}")
    public R deleteStationInfoById(@PathVariable Integer id) {
        return R.doResponse(stationInfoService.deleteStationInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/stationInfo/{id}")
    public R updateStationInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateStationInfoByIdReq req) {
        return R.doResponse(stationInfoService.updateStationInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/stationInfo/{id}")
    public R<StationInfo> getStationInfoById(@PathVariable Integer id) {
        return R.doResponse(stationInfoService.getStationInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/stationInfo")
    public R<PageInfo<StationInfo>> getStationInfoList(@Validated @ModelAttribute GetStationInfoListReq req) {
        return R.doResponse(stationInfoService.getStationInfoList(req));
    }
}
