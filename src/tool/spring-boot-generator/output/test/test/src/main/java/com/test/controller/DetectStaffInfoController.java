/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDetectStaffInfoReq;
import com.test.pojo.req.GetDetectStaffInfoListReq;
import com.test.pojo.req.UpdateDetectStaffInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DetectStaffInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class DetectStaffInfoController {

    @Autowired
    private DetectStaffInfoService detectStaffInfoService;

    @ApiOperation("")
    @PostMapping(path = "/detectStaffInfo")
    public R addDetectStaffInfo(@Validated @ModelAttribute AddDetectStaffInfoReq req) {
        return R.doResponse(detectStaffInfoService.addDetectStaffInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/detectStaffInfo/{id}")
    public R deleteDetectStaffInfoById(@PathVariable Integer id) {
        return R.doResponse(detectStaffInfoService.deleteDetectStaffInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/detectStaffInfo/{id}")
    public R updateDetectStaffInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDetectStaffInfoByIdReq req) {
        return R.doResponse(detectStaffInfoService.updateDetectStaffInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectStaffInfo/{id}")
    public R<DetectStaffInfo> getDetectStaffInfoById(@PathVariable Integer id) {
        return R.doResponse(detectStaffInfoService.getDetectStaffInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectStaffInfo")
    public R<PageInfo<DetectStaffInfo>> getDetectStaffInfoList(@Validated @ModelAttribute GetDetectStaffInfoListReq req) {
        return R.doResponse(detectStaffInfoService.getDetectStaffInfoList(req));
    }
}
