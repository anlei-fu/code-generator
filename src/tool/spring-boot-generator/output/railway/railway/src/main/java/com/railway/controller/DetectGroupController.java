package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectGroup;
import com.railway.pojo.req.AddDetectGroupReq;
import com.railway.pojo.req.GetDetectGroupListReq;
import com.railway.pojo.req.UpdateDetectGroupByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DetectGroupService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
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

