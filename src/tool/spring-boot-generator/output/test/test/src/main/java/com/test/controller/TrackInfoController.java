/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddTrackInfoReq;
import com.test.pojo.req.GetTrackInfoListReq;
import com.test.pojo.req.UpdateTrackInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.TrackInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class TrackInfoController {

    @Autowired
    private TrackInfoService trackInfoService;

    @ApiOperation("")
    @PostMapping(path = "/trackInfo")
    public R addTrackInfo(@Validated @ModelAttribute AddTrackInfoReq req) {
        return R.doResponse(trackInfoService.addTrackInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/trackInfo/{id}")
    public R deleteTrackInfoById(@PathVariable Integer id) {
        return R.doResponse(trackInfoService.deleteTrackInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/trackInfo/{id}")
    public R updateTrackInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTrackInfoByIdReq req) {
        return R.doResponse(trackInfoService.updateTrackInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/trackInfo/{id}")
    public R<TrackInfo> getTrackInfoById(@PathVariable Integer id) {
        return R.doResponse(trackInfoService.getTrackInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/trackInfo")
    public R<PageInfo<TrackInfo>> getTrackInfoList(@Validated @ModelAttribute GetTrackInfoListReq req) {
        return R.doResponse(trackInfoService.getTrackInfoList(req));
    }
}
