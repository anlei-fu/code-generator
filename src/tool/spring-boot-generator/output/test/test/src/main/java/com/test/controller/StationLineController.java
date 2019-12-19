/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddStationLineReq;
import com.test.pojo.req.GetStationLineListReq;
import com.test.pojo.req.UpdateStationLineByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.StationLineService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class StationLineController {

    @Autowired
    private StationLineService stationLineService;

    @ApiOperation("")
    @PostMapping(path = "/stationLine")
    public R addStationLine(@Validated @ModelAttribute AddStationLineReq req) {
        return R.doResponse(stationLineService.addStationLine(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/stationLine/{id}")
    public R deleteStationLineById(@PathVariable Integer id) {
        return R.doResponse(stationLineService.deleteStationLineById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/stationLine/{id}")
    public R updateStationLineById(@PathVariable Integer id, @Validated @ModelAttribute UpdateStationLineByIdReq req) {
        return R.doResponse(stationLineService.updateStationLineById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/stationLine/{id}")
    public R<StationLine> getStationLineById(@PathVariable Integer id) {
        return R.doResponse(stationLineService.getStationLineById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/stationLine")
    public R<PageInfo<StationLine>> getStationLineList(@Validated @ModelAttribute GetStationLineListReq req) {
        return R.doResponse(stationLineService.getStationLineList(req));
    }
}
