package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.StationLine;
import com.railway.pojo.req.AddStationLineReq;
import com.railway.pojo.req.GetStationLineListReq;
import com.railway.pojo.req.UpdateStationLineByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.StationLineService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
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
