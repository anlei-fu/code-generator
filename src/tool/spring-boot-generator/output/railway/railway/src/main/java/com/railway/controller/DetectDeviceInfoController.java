package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectDeviceInfo;
import com.railway.pojo.req.AddDetectDeviceInfoReq;
import com.railway.pojo.req.GetDetectDeviceInfoListReq;
import com.railway.pojo.req.UpdateDetectDeviceInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DetectDeviceInfoService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class DetectDeviceInfoController {

    @Autowired
    private DetectDeviceInfoService detectDeviceInfoService;

    @ApiOperation("")
    @PostMapping(path = "/detectDeviceInfo")
    public R addDetectDeviceInfo(@Validated @ModelAttribute AddDetectDeviceInfoReq req) {
        return R.doResponse(detectDeviceInfoService.addDetectDeviceInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/detectDeviceInfo/{id}")
    public R deleteDetectDeviceInfoById(@PathVariable Integer id) {
        return R.doResponse(detectDeviceInfoService.deleteDetectDeviceInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/detectDeviceInfo/{id}")
    public R updateDetectDeviceInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDetectDeviceInfoByIdReq req) {
        return R.doResponse(detectDeviceInfoService.updateDetectDeviceInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/detectDeviceInfo/{id}")
    public R<DetectDeviceInfo> getDetectDeviceInfoById(@PathVariable Integer id) {
        return R.doResponse(detectDeviceInfoService.getDetectDeviceInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/detectDeviceInfo")
    public R<PageInfo<DetectDeviceInfo>> getDetectDeviceInfoList(@Validated @ModelAttribute GetDetectDeviceInfoListReq req) {
        return R.doResponse(detectDeviceInfoService.getDetectDeviceInfoList(req));
    }

}
