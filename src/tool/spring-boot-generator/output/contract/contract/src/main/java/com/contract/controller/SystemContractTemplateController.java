package com.contract.controller;

import com.contract.pojo.entity.SystemContractTemplate;
import com.contract.pojo.req.AddSystemContractTemplateReq;
import com.contract.pojo.req.GetSystemContractTemplateListReq;
import com.contract.pojo.req.UpdateSystemContractTemplateByContractFileReq;
import com.contract.pojo.resp.R;
import com.contract.service.SystemContractTemplateService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class SystemContractTemplateController {

    @Autowired
    private SystemContractTemplateService systemContractTemplateService;

    @ApiOperation("")
    @PostMapping(path = "/systemContractTemplate")
    public R addSystemContractTemplate(@Validated @ModelAttribute AddSystemContractTemplateReq req) {
        return R.doResponse(systemContractTemplateService.addSystemContractTemplate(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/systemContractTemplate/{contractFile}")
    public R deleteSystemContractTemplateByContractFile(@PathVariable String contractFile) {
        return R.doResponse(systemContractTemplateService.deleteSystemContractTemplateByContractFile(contractFile));
    }

    @ApiOperation("")
    @PutMapping(path = "/systemContractTemplate/{contractFile}")
    public R updateSystemContractTemplateByContractFile(@PathVariable String contractFile, @Validated @ModelAttribute UpdateSystemContractTemplateByContractFileReq req) {
        return R.doResponse(systemContractTemplateService.updateSystemContractTemplateByContractFile(contractFile, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemContractTemplate/{contractFile}")
    public R<SystemContractTemplate> getSystemContractTemplateByContractFile(@PathVariable String contractFile) {
        return R.doResponse(systemContractTemplateService.getSystemContractTemplateByContractFile(contractFile));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemContractTemplate")
    public R<PageInfo<SystemContractTemplate>> getSystemContractTemplateList(@Validated @ModelAttribute GetSystemContractTemplateListReq req) {
        return R.doResponse(systemContractTemplateService.getSystemContractTemplateList(req));
    }

}

