package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.DomainModel;
import com.spider.pojo.req.AddDomainModelReq;
import com.spider.pojo.req.GetDomainModelListReq;
import com.spider.pojo.req.UpdateDomainModelByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.DomainModelService;
import com.spider.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class DomainModelController {

    @Autowired
    private DomainModelService domainModelService;

    @ApiOperation("")
    @PostMapping(path = "/domainModel")
    public R addDomainModel(@Validated @ModelAttribute AddDomainModelReq req) {
        return R.doResponse(domainModelService.addDomainModel(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/domainModel/{id}")
    public R deleteDomainModelById(@PathVariable Integer id) {
        return R.doResponse(domainModelService.deleteDomainModelById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/domainModel/{id}")
    public R updateDomainModelById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDomainModelByIdReq req) {
        return R.doResponse(domainModelService.updateDomainModelById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/domainModel/{id}")
    public R<DomainModel> getDomainModelById(@PathVariable Integer id) {
        return R.doResponse(domainModelService.getDomainModelById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/domainModel")
    public R<PageInfo<DomainModel>> getDomainModelList(@Validated @ModelAttribute GetDomainModelListReq req) {
        return R.doResponse(domainModelService.getDomainModelList(req));
    }

}
