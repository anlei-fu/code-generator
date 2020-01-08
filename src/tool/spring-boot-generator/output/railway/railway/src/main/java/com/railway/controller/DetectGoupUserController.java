package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectGoupUser;
import com.railway.pojo.req.AddDetectGoupUserReq;
import com.railway.pojo.req.GetDetectGoupUserListReq;
import com.railway.pojo.req.UpdateDetectGoupUserByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DetectGoupUserService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class DetectGoupUserController {

    @Autowired
    private DetectGoupUserService detectGoupUserService;

    @ApiOperation("")
    @PostMapping(path = "/detectGoupUser")
    public R addDetectGoupUser(@Validated @ModelAttribute AddDetectGoupUserReq req) {
        return R.doResponse(detectGoupUserService.addDetectGoupUser(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/detectGoupUser/{id}")
    public R deleteDetectGoupUserById(@PathVariable Integer id) {
        return R.doResponse(detectGoupUserService.deleteDetectGoupUserById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/detectGoupUser/{id}")
    public R updateDetectGoupUserById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDetectGoupUserByIdReq req) {
        return R.doResponse(detectGoupUserService.updateDetectGoupUserById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/detectGoupUser/{id}")
    public R<DetectGoupUser> getDetectGoupUserById(@PathVariable Integer id) {
        return R.doResponse(detectGoupUserService.getDetectGoupUserById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/detectGoupUser")
    public R<PageInfo<DetectGoupUser>> getDetectGoupUserList(@Validated @ModelAttribute GetDetectGoupUserListReq req) {
        return R.doResponse(detectGoupUserService.getDetectGoupUserList(req));
    }

}
