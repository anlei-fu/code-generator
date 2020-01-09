package com.contract.controller;

import com.contract.pojo.entity.ContractMain;
import com.contract.pojo.req.AddContractMainReq;
import com.contract.pojo.req.GetContractMainListReq;
import com.contract.pojo.req.UpdateContractMainByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.ContractMainService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class ContractMainController {

    @Autowired
    private ContractMainService contractMainService;

    @ApiOperation("")
    @PostMapping(path = "/contractMain")
    public R addContractMain(@Validated @ModelAttribute AddContractMainReq req) {
        return R.doResponse(contractMainService.addContractMain(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/contractMain/{id}")
    public R deleteContractMainById(@PathVariable Integer id) {
        return R.doResponse(contractMainService.deleteContractMainById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/contractMain/{id}")
    public R updateContractMainById(@PathVariable Integer id, @Validated @ModelAttribute UpdateContractMainByIdReq req) {
        return R.doResponse(contractMainService.updateContractMainById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/contractMain/{id}")
    public R<ContractMain> getContractMainById(@PathVariable Integer id) {
        return R.doResponse(contractMainService.getContractMainById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/contractMain")
    public R<PageInfo<ContractMain>> getContractMainList(@Validated @ModelAttribute GetContractMainListReq req) {
        return R.doResponse(contractMainService.getContractMainList(req));
    }

}

