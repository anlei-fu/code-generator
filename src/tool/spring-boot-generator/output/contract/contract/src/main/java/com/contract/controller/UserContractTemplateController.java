package com.contract.controller;

import com.contract.pojo.entity.UserContractTemplate;
import com.contract.pojo.req.AddUserContractTemplateReq;
import com.contract.pojo.req.GetUserContractTemplateListReq;
import com.contract.pojo.req.UpdateUserContractTemplateByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.UserContractTemplateService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class UserContractTemplateController {

    @Autowired
    private UserContractTemplateService userContractTemplateService;

    @ApiOperation("")
    @PostMapping(path = "/userContractTemplate")
    public R addUserContractTemplate(@Validated @ModelAttribute AddUserContractTemplateReq req) {
        return R.doResponse(userContractTemplateService.addUserContractTemplate(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userContractTemplate/{id}")
    public R deleteUserContractTemplateById(@PathVariable Integer id) {
        return R.doResponse(userContractTemplateService.deleteUserContractTemplateById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userContractTemplate/{id}")
    public R updateUserContractTemplateById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserContractTemplateByIdReq req) {
        return R.doResponse(userContractTemplateService.updateUserContractTemplateById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userContractTemplate/{id}")
    public R<UserContractTemplate> getUserContractTemplateById(@PathVariable Integer id) {
        return R.doResponse(userContractTemplateService.getUserContractTemplateById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userContractTemplate")
    public R<PageInfo<UserContractTemplate>> getUserContractTemplateList(@Validated @ModelAttribute GetUserContractTemplateListReq req) {
        return R.doResponse(userContractTemplateService.getUserContractTemplateList(req));
    }

}

