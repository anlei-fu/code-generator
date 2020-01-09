package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectBoundaryInfo;
import com.railway.pojo.req.AddDetectBoundaryInfoReq;
import com.railway.pojo.req.GetDetectBoundaryInfoListReq;
import com.railway.pojo.req.UpdateDetectBoundaryInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DetectBoundaryInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
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

