package com.contract.controller;

import com.contract.pojo.entity.ContractSign;
import com.contract.pojo.req.AddContractSignReq;
import com.contract.pojo.req.GetContractSignListReq;
import com.contract.pojo.req.UpdateContractSignByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.ContractSignService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class ContractSignController {

    @Autowired
    private ContractSignService contractSignService;

    @ApiOperation("")
    @PostMapping(path = "/contractSign")
    public R addContractSign(@Validated @ModelAttribute AddContractSignReq req) {
        return R.doResponse(contractSignService.addContractSign(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/contractSign/{id}")
    public R deleteContractSignById(@PathVariable Integer id) {
        return R.doResponse(contractSignService.deleteContractSignById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/contractSign/{id}")
    public R updateContractSignById(@PathVariable Integer id, @Validated @ModelAttribute UpdateContractSignByIdReq req) {
        return R.doResponse(contractSignService.updateContractSignById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/contractSign/{id}")
    public R<ContractSign> getContractSignById(@PathVariable Integer id) {
        return R.doResponse(contractSignService.getContractSignById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/contractSign")
    public R<PageInfo<ContractSign>> getContractSignList(@Validated @ModelAttribute GetContractSignListReq req) {
        return R.doResponse(contractSignService.getContractSignList(req));
    }

}

