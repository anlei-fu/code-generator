package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.WorkshopInfo;
import com.railway.pojo.req.AddWorkshopInfoReq;
import com.railway.pojo.req.GetWorkshopInfoListReq;
import com.railway.pojo.req.UpdateWorkshopInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.WorkshopInfoService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class WorkshopInfoController {

    @Autowired
    private WorkshopInfoService workshopInfoService;

    @ApiOperation("")
    @PostMapping(path = "/workshopInfo")
    public R addWorkshopInfo(@Validated @ModelAttribute AddWorkshopInfoReq req) {
        return R.doResponse(workshopInfoService.addWorkshopInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/workshopInfo/{id}")
    public R deleteWorkshopInfoById(@PathVariable Integer id) {
        return R.doResponse(workshopInfoService.deleteWorkshopInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/workshopInfo/{id}")
    public R updateWorkshopInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateWorkshopInfoByIdReq req) {
        return R.doResponse(workshopInfoService.updateWorkshopInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/workshopInfo/{id}")
    public R<WorkshopInfo> getWorkshopInfoById(@PathVariable Integer id) {
        return R.doResponse(workshopInfoService.getWorkshopInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/workshopInfo")
    public R<PageInfo<WorkshopInfo>> getWorkshopInfoList(@Validated @ModelAttribute GetWorkshopInfoListReq req) {
        return R.doResponse(workshopInfoService.getWorkshopInfoList(req));
    }

}
