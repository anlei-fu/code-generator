package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectStaffInfo;
import com.railway.pojo.entity.DetectStaffInfoCopy;
import com.railway.pojo.req.AddDetectStaffInfoCopyReq;
import com.railway.pojo.req.GetDetectStaffInfoCopyListReq;
import com.railway.pojo.req.UpdateDetectStaffInfoCopyByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DetectStaffInfoCopyService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
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
