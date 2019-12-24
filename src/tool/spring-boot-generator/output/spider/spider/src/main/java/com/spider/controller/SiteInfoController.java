package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.SiteInfo;
import com.spider.pojo.req.AddSiteInfoReq;
import com.spider.pojo.req.GetSiteInfoListReq;
import com.spider.pojo.req.UpdateSiteInfoByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.SiteInfoService;
import com.spider.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class SiteInfoController {

    @Autowired
    private SiteInfoService siteInfoService;

    @ApiOperation("")
    @PostMapping(path = "/siteInfo")
    public R addSiteInfo(@Validated @ModelAttribute AddSiteInfoReq req) {
        return R.doResponse(siteInfoService.addSiteInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/siteInfo/{id}")
    public R deleteSiteInfoById(@PathVariable Integer id) {
        return R.doResponse(siteInfoService.deleteSiteInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/siteInfo/{id}")
    public R updateSiteInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSiteInfoByIdReq req) {
        return R.doResponse(siteInfoService.updateSiteInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/siteInfo/{id}")
    public R<SiteInfo> getSiteInfoById(@PathVariable Integer id) {
        return R.doResponse(siteInfoService.getSiteInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/siteInfo")
    public R<PageInfo<SiteInfo>> getSiteInfoList(@Validated @ModelAttribute GetSiteInfoListReq req) {
        return R.doResponse(siteInfoService.getSiteInfoList(req));
    }

}
