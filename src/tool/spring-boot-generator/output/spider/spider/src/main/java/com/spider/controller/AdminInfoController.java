package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.AdminInfo;
import com.spider.pojo.req.AddAdminInfoReq;
import com.spider.pojo.req.GetAdminInfoListReq;
import com.spider.pojo.req.UpdateAdminInfoByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.AdminInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class AdminInfoController {

    @Autowired
    private AdminInfoService adminInfoService;

    @ApiOperation("")
    @PostMapping(path = "/adminInfo")
    public R addAdminInfo(@Validated @ModelAttribute AddAdminInfoReq req) {
        return R.doResponse(adminInfoService.addAdminInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/adminInfo/{id}")
    public R deleteAdminInfoById(@PathVariable Integer id) {
        return R.doResponse(adminInfoService.deleteAdminInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/adminInfo/{id}")
    public R updateAdminInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateAdminInfoByIdReq req) {
        return R.doResponse(adminInfoService.updateAdminInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/adminInfo/{id}")
    public R<AdminInfo> getAdminInfoById(@PathVariable Integer id) {
        return R.doResponse(adminInfoService.getAdminInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/adminInfo")
    public R<PageInfo<AdminInfo>> getAdminInfoList(@Validated @ModelAttribute GetAdminInfoListReq req) {
        return R.doResponse(adminInfoService.getAdminInfoList(req));
    }

}
