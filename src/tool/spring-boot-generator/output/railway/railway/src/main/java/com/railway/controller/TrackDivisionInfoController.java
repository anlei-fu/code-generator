package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.TrackDivisionInfo;
import com.railway.pojo.req.AddTrackDivisionInfoReq;
import com.railway.pojo.req.GetTrackDivisionInfoListReq;
import com.railway.pojo.req.UpdateTrackDivisionInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.TrackDivisionInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class TrackDivisionInfoController {

    @Autowired
    private TrackDivisionInfoService trackDivisionInfoService;

    @ApiOperation("")
    @PostMapping(path = "/trackDivisionInfo")
    public R addTrackDivisionInfo(@Validated @ModelAttribute AddTrackDivisionInfoReq req) {
        return R.doResponse(trackDivisionInfoService.addTrackDivisionInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/trackDivisionInfo/{id}")
    public R deleteTrackDivisionInfoById(@PathVariable Integer id) {
        return R.doResponse(trackDivisionInfoService.deleteTrackDivisionInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/trackDivisionInfo/{id}")
    public R updateTrackDivisionInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTrackDivisionInfoByIdReq req) {
        return R.doResponse(trackDivisionInfoService.updateTrackDivisionInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/trackDivisionInfo/{id}")
    public R<TrackDivisionInfo> getTrackDivisionInfoById(@PathVariable Integer id) {
        return R.doResponse(trackDivisionInfoService.getTrackDivisionInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/trackDivisionInfo")
    public R<PageInfo<TrackDivisionInfo>> getTrackDivisionInfoList(@Validated @ModelAttribute GetTrackDivisionInfoListReq req) {
        return R.doResponse(trackDivisionInfoService.getTrackDivisionInfoList(req));
    }

}

