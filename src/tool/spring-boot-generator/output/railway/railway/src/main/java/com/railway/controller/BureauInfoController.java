package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.BureauInfo;
import com.railway.pojo.req.AddBureauInfoReq;
import com.railway.pojo.req.GetBureauInfoListReq;
import com.railway.pojo.req.UpdateBureauInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.BureauInfoService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class BureauInfoController {

    @Autowired
    private BureauInfoService bureauInfoService;

    @ApiOperation("")
    @PostMapping(path = "/bureauInfo")
    public R addBureauInfo(@Validated @ModelAttribute AddBureauInfoReq req) {
        return R.doResponse(bureauInfoService.addBureauInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/bureauInfo/{id}")
    public R deleteBureauInfoById(@PathVariable Integer id) {
        return R.doResponse(bureauInfoService.deleteBureauInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/bureauInfo/{id}")
    public R updateBureauInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateBureauInfoByIdReq req) {
        return R.doResponse(bureauInfoService.updateBureauInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/bureauInfo/{id}")
    public R<BureauInfo> getBureauInfoById(@PathVariable Integer id) {
        return R.doResponse(bureauInfoService.getBureauInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/bureauInfo")
    public R<PageInfo<BureauInfo>> getBureauInfoList(@Validated @ModelAttribute GetBureauInfoListReq req) {
        return R.doResponse(bureauInfoService.getBureauInfoList(req));
    }

}
