/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddCurveInfoReq;
import com.test.pojo.req.GetCurveInfoListReq;
import com.test.pojo.req.UpdateCurveInfoByCurveIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.CurveInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class CurveInfoController {

    @Autowired
    private CurveInfoService curveInfoService;

    @ApiOperation("")
    @PostMapping(path = "/curveInfo")
    public R addCurveInfo(@Validated @ModelAttribute AddCurveInfoReq req) {
        return R.doResponse(curveInfoService.addCurveInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/curveInfo/{curveId}")
    public R deleteCurveInfoByCurveId(@PathVariable Integer curveId) {
        return R.doResponse(curveInfoService.deleteCurveInfoByCurveId(curveId));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/curveInfo/{curveId}")
    public R updateCurveInfoByCurveId(@PathVariable Integer curveId, @Validated @ModelAttribute UpdateCurveInfoByCurveIdReq req) {
        return R.doResponse(curveInfoService.updateCurveInfoByCurveId(curveId, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/curveInfo/{curveId}")
    public R<CurveInfo> getCurveInfoByCurveId(@PathVariable Integer curveId) {
        return R.doResponse(curveInfoService.getCurveInfoByCurveId(curveId));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/curveInfo")
    public R<PageInfo<CurveInfo>> getCurveInfoList(@Validated @ModelAttribute GetCurveInfoListReq req) {
        return R.doResponse(curveInfoService.getCurveInfoList(req));
    }
}
