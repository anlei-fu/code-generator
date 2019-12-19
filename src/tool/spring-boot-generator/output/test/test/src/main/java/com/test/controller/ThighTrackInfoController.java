/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddThighTrackInfoReq;
import com.test.pojo.req.GetThighTrackInfoListReq;
import com.test.pojo.req.UpdateThighTrackInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.ThighTrackInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
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
