/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDetectGroupReq;
import com.test.pojo.req.GetDetectGroupListReq;
import com.test.pojo.req.UpdateDetectGroupByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DetectGroupService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
@RestController
public class DetectGroupController {

    @Autowired
    private DetectGroupService detectGroupService;

    @ApiOperation("")
    @PostMapping(path = "/detectGroup")
    public R addDetectGroup(@Validated @ModelAttribute AddDetectGroupReq req) {
        return R.doResponse(detectGroupService.addDetectGroup(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/detectGroup/{id}")
    public R deleteDetectGroupById(@PathVariable Integer id) {
        return R.doResponse(detectGroupService.deleteDetectGroupById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/detectGroup/{id}")
    public R updateDetectGroupById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDetectGroupByIdReq req) {
        return R.doResponse(detectGroupService.updateDetectGroupById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectGroup/{id}")
    public R<DetectGroup> getDetectGroupById(@PathVariable Integer id) {
        return R.doResponse(detectGroupService.getDetectGroupById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectGroup")
    public R<PageInfo<DetectGroup>> getDetectGroupList(@Validated @ModelAttribute GetDetectGroupListReq req) {
        return R.doResponse(detectGroupService.getDetectGroupList(req));
    }
}
