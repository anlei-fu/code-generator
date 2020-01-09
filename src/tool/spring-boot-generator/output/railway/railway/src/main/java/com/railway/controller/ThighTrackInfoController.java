package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.ThighTrackInfo;
import com.railway.pojo.req.AddThighTrackInfoReq;
import com.railway.pojo.req.GetThighTrackInfoListReq;
import com.railway.pojo.req.UpdateThighTrackInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.ThighTrackInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class ThighTrackInfoController {

    @Autowired
    private ThighTrackInfoService thighTrackInfoService;

    @ApiOperation("")
    @PostMapping(path = "/thighTrackInfo")
    public R addThighTrackInfo(@Validated @ModelAttribute AddThighTrackInfoReq req) {
        return R.doResponse(thighTrackInfoService.addThighTrackInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/thighTrackInfo/{id}")
    public R deleteThighTrackInfoById(@PathVariable Integer id) {
        return R.doResponse(thighTrackInfoService.deleteThighTrackInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/thighTrackInfo/{id}")
    public R updateThighTrackInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateThighTrackInfoByIdReq req) {
        return R.doResponse(thighTrackInfoService.updateThighTrackInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/thighTrackInfo/{id}")
    public R<ThighTrackInfo> getThighTrackInfoById(@PathVariable Integer id) {
        return R.doResponse(thighTrackInfoService.getThighTrackInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/thighTrackInfo")
    public R<PageInfo<ThighTrackInfo>> getThighTrackInfoList(@Validated @ModelAttribute GetThighTrackInfoListReq req) {
        return R.doResponse(thighTrackInfoService.getThighTrackInfoList(req));
    }

}

