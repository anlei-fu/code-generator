/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDetectStaffInfoCopyReq;
import com.test.pojo.req.GetDetectStaffInfoCopyListReq;
import com.test.pojo.req.UpdateDetectStaffInfoCopyByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DetectStaffInfoCopyService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class DetectStaffInfoCopyController {

    @Autowired
    private DetectStaffInfoCopyService detectStaffInfoCopyService;

    @ApiOperation("")
    @PostMapping(path = "/detectStaffInfoCopy")
    public R addDetectStaffInfoCopy(@Validated @ModelAttribute AddDetectStaffInfoCopyReq req) {
        return R.doResponse(detectStaffInfoCopyService.addDetectStaffInfoCopy(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/detectStaffInfoCopy/{id}")
    public R deleteDetectStaffInfoCopyById(@PathVariable Integer id) {
        return R.doResponse(detectStaffInfoCopyService.deleteDetectStaffInfoCopyById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/detectStaffInfoCopy/{id}")
    public R updateDetectStaffInfoCopyById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDetectStaffInfoCopyByIdReq req) {
        return R.doResponse(detectStaffInfoCopyService.updateDetectStaffInfoCopyById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectStaffInfoCopy/{id}")
    public R<DetectStaffInfoCopy> getDetectStaffInfoCopyById(@PathVariable Integer id) {
        return R.doResponse(detectStaffInfoCopyService.getDetectStaffInfoCopyById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectStaffInfoCopy")
    public R<PageInfo<DetectStaffInfoCopy>> getDetectStaffInfoCopyList(@Validated @ModelAttribute GetDetectStaffInfoCopyListReq req) {
        return R.doResponse(detectStaffInfoCopyService.getDetectStaffInfoCopyList(req));
    }
}
