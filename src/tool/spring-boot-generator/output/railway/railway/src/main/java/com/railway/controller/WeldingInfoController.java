package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.WeldingInfo;
import com.railway.pojo.req.AddWeldingInfoReq;
import com.railway.pojo.req.GetWeldingInfoListReq;
import com.railway.pojo.req.UpdateWeldingInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.WeldingInfoService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class WeldingInfoController {

    @Autowired
    private WeldingInfoService weldingInfoService;

    @ApiOperation("")
    @PostMapping(path = "/weldingInfo")
    public R addWeldingInfo(@Validated @ModelAttribute AddWeldingInfoReq req) {
        return R.doResponse(weldingInfoService.addWeldingInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/weldingInfo/{id}")
    public R deleteWeldingInfoById(@PathVariable Integer id) {
        return R.doResponse(weldingInfoService.deleteWeldingInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/weldingInfo/{id}")
    public R updateWeldingInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateWeldingInfoByIdReq req) {
        return R.doResponse(weldingInfoService.updateWeldingInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/weldingInfo/{id}")
    public R<WeldingInfo> getWeldingInfoById(@PathVariable Integer id) {
        return R.doResponse(weldingInfoService.getWeldingInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/weldingInfo")
    public R<PageInfo<WeldingInfo>> getWeldingInfoList(@Validated @ModelAttribute GetWeldingInfoListReq req) {
        return R.doResponse(weldingInfoService.getWeldingInfoList(req));
    }

}
