package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.CurveInfo;
import com.railway.pojo.req.AddCurveInfoReq;
import com.railway.pojo.req.GetCurveInfoListReq;
import com.railway.pojo.req.UpdateCurveInfoByCurveIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.CurveInfoService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
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
