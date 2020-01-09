package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.WorshopBoundaryInfo;
import com.railway.pojo.req.AddWorshopBoundaryInfoReq;
import com.railway.pojo.req.GetWorshopBoundaryInfoListReq;
import com.railway.pojo.req.UpdateWorshopBoundaryInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.WorshopBoundaryInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class WorshopBoundaryInfoController {

    @Autowired
    private WorshopBoundaryInfoService worshopBoundaryInfoService;

    @ApiOperation("")
    @PostMapping(path = "/worshopBoundaryInfo")
    public R addWorshopBoundaryInfo(@Validated @ModelAttribute AddWorshopBoundaryInfoReq req) {
        return R.doResponse(worshopBoundaryInfoService.addWorshopBoundaryInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/worshopBoundaryInfo/{id}")
    public R deleteWorshopBoundaryInfoById(@PathVariable Integer id) {
        return R.doResponse(worshopBoundaryInfoService.deleteWorshopBoundaryInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/worshopBoundaryInfo/{id}")
    public R updateWorshopBoundaryInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateWorshopBoundaryInfoByIdReq req) {
        return R.doResponse(worshopBoundaryInfoService.updateWorshopBoundaryInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/worshopBoundaryInfo/{id}")
    public R<WorshopBoundaryInfo> getWorshopBoundaryInfoById(@PathVariable Integer id) {
        return R.doResponse(worshopBoundaryInfoService.getWorshopBoundaryInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/worshopBoundaryInfo")
    public R<PageInfo<WorshopBoundaryInfo>> getWorshopBoundaryInfoList(@Validated @ModelAttribute GetWorshopBoundaryInfoListReq req) {
        return R.doResponse(worshopBoundaryInfoService.getWorshopBoundaryInfoList(req));
    }

}

