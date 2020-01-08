package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectStaffInfo;
import com.railway.pojo.req.AddDetectStaffInfoReq;
import com.railway.pojo.req.GetDetectStaffInfoListReq;
import com.railway.pojo.req.UpdateDetectStaffInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DetectStaffInfoService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
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
