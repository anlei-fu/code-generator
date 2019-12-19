/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDetectBoundaryInfoReq;
import com.test.pojo.req.GetDetectBoundaryInfoListReq;
import com.test.pojo.req.UpdateDetectBoundaryInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DetectBoundaryInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class DetectBoundaryInfoController {

    @Autowired
    private DetectBoundaryInfoService detectBoundaryInfoService;

    @ApiOperation("")
    @PostMapping(path = "/detectBoundaryInfo")
    public R addDetectBoundaryInfo(@Validated @ModelAttribute AddDetectBoundaryInfoReq req) {
        return R.doResponse(detectBoundaryInfoService.addDetectBoundaryInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/detectBoundaryInfo/{id}")
    public R deleteDetectBoundaryInfoById(@PathVariable Integer id) {
        return R.doResponse(detectBoundaryInfoService.deleteDetectBoundaryInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/detectBoundaryInfo/{id}")
    public R updateDetectBoundaryInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDetectBoundaryInfoByIdReq req) {
        return R.doResponse(detectBoundaryInfoService.updateDetectBoundaryInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectBoundaryInfo/{id}")
    public R<DetectBoundaryInfo> getDetectBoundaryInfoById(@PathVariable Integer id) {
        return R.doResponse(detectBoundaryInfoService.getDetectBoundaryInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectBoundaryInfo")
    public R<PageInfo<DetectBoundaryInfo>> getDetectBoundaryInfoList(@Validated @ModelAttribute GetDetectBoundaryInfoListReq req) {
        return R.doResponse(detectBoundaryInfoService.getDetectBoundaryInfoList(req));
    }
}
