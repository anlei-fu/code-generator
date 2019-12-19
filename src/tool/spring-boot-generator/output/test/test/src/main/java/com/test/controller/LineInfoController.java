/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddLineInfoReq;
import com.test.pojo.req.GetLineInfoListReq;
import com.test.pojo.req.UpdateLineInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.LineInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
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
