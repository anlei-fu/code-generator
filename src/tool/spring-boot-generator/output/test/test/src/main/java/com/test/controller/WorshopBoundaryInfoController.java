/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddWorshopBoundaryInfoReq;
import com.test.pojo.req.GetWorshopBoundaryInfoListReq;
import com.test.pojo.req.UpdateWorshopBoundaryInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.WorshopBoundaryInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
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
