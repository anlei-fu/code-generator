package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.LineInfo;
import com.railway.pojo.req.AddLineInfoReq;
import com.railway.pojo.req.GetLineInfoListReq;
import com.railway.pojo.req.UpdateLineInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.LineInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class LineInfoController {

    @Autowired
    private LineInfoService lineInfoService;

    @ApiOperation("")
    @PostMapping(path = "/lineInfo")
    public R addLineInfo(@Validated @ModelAttribute AddLineInfoReq req) {
        return R.doResponse(lineInfoService.addLineInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/lineInfo/{id}")
    public R deleteLineInfoById(@PathVariable Integer id) {
        return R.doResponse(lineInfoService.deleteLineInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/lineInfo/{id}")
    public R updateLineInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateLineInfoByIdReq req) {
        return R.doResponse(lineInfoService.updateLineInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/lineInfo/{id}")
    public R<LineInfo> getLineInfoById(@PathVariable Integer id) {
        return R.doResponse(lineInfoService.getLineInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/lineInfo")
    public R<PageInfo<LineInfo>> getLineInfoList(@Validated @ModelAttribute GetLineInfoListReq req) {
        return R.doResponse(lineInfoService.getLineInfoList(req));
    }

}

