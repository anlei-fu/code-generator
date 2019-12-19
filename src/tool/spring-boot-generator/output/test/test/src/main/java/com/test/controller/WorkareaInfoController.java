/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddWorkareaInfoReq;
import com.test.pojo.req.GetWorkareaInfoListReq;
import com.test.pojo.req.UpdateWorkareaInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.WorkareaInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class WorkareaInfoController {

    @Autowired
    private WorkareaInfoService workareaInfoService;

    @ApiOperation("")
    @PostMapping(path = "/workareaInfo")
    public R addWorkareaInfo(@Validated @ModelAttribute AddWorkareaInfoReq req) {
        return R.doResponse(workareaInfoService.addWorkareaInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/workareaInfo/{id}")
    public R deleteWorkareaInfoById(@PathVariable Integer id) {
        return R.doResponse(workareaInfoService.deleteWorkareaInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/workareaInfo/{id}")
    public R updateWorkareaInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateWorkareaInfoByIdReq req) {
        return R.doResponse(workareaInfoService.updateWorkareaInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/workareaInfo/{id}")
    public R<WorkareaInfo> getWorkareaInfoById(@PathVariable Integer id) {
        return R.doResponse(workareaInfoService.getWorkareaInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/workareaInfo")
    public R<PageInfo<WorkareaInfo>> getWorkareaInfoList(@Validated @ModelAttribute GetWorkareaInfoListReq req) {
        return R.doResponse(workareaInfoService.getWorkareaInfoList(req));
    }
}
