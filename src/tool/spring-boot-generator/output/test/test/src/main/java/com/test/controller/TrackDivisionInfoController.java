/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddTrackDivisionInfoReq;
import com.test.pojo.req.GetTrackDivisionInfoListReq;
import com.test.pojo.req.UpdateTrackDivisionInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.TrackDivisionInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
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
