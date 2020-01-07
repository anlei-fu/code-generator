package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.DomainInfo;
import com.spider.pojo.req.AddDomainInfoReq;
import com.spider.pojo.req.GetDomainInfoListReq;
import com.spider.pojo.req.UpdateDomainInfoByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.DomainInfoService;
import com.spider.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class DomainInfoController {

    @Autowired
    private DomainInfoService domainInfoService;

    @ApiOperation("")
    @PostMapping(path = "/domainInfo")
    public R addDomainInfo(@Validated @ModelAttribute AddDomainInfoReq req) {
        return R.doResponse(domainInfoService.addDomainInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/domainInfo/{id}")
    public R deleteDomainInfoById(@PathVariable Integer id) {
        return R.doResponse(domainInfoService.deleteDomainInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/domainInfo/{id}")
    public R updateDomainInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDomainInfoByIdReq req) {
        return R.doResponse(domainInfoService.updateDomainInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/domainInfo/{id}")
    public R<DomainInfo> getDomainInfoById(@PathVariable Integer id) {
        return R.doResponse(domainInfoService.getDomainInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/domainInfo")
    public R<PageInfo<DomainInfo>> getDomainInfoList(@Validated @ModelAttribute GetDomainInfoListReq req) {
        return R.doResponse(domainInfoService.getDomainInfoList(req));
    }

}
