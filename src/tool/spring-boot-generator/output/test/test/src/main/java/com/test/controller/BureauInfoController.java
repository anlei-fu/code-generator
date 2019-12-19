/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddBureauInfoReq;
import com.test.pojo.req.GetBureauInfoListReq;
import com.test.pojo.req.UpdateBureauInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.BureauInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
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
