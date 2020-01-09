package com.contract.controller;

import com.contract.pojo.entity.ContractSignRecord;
import com.contract.pojo.req.AddContractSignRecordReq;
import com.contract.pojo.req.GetContractSignRecordListReq;
import com.contract.pojo.req.UpdateContractSignRecordByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.ContractSignRecordService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class ContractSignRecordController {

    @Autowired
    private ContractSignRecordService contractSignRecordService;

    @ApiOperation("")
    @PostMapping(path = "/contractSignRecord")
    public R addContractSignRecord(@Validated @ModelAttribute AddContractSignRecordReq req) {
        return R.doResponse(contractSignRecordService.addContractSignRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/contractSignRecord/{id}")
    public R deleteContractSignRecordById(@PathVariable Integer id) {
        return R.doResponse(contractSignRecordService.deleteContractSignRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/contractSignRecord/{id}")
    public R updateContractSignRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateContractSignRecordByIdReq req) {
        return R.doResponse(contractSignRecordService.updateContractSignRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/contractSignRecord/{id}")
    public R<ContractSignRecord> getContractSignRecordById(@PathVariable Integer id) {
        return R.doResponse(contractSignRecordService.getContractSignRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/contractSignRecord")
    public R<PageInfo<ContractSignRecord>> getContractSignRecordList(@Validated @ModelAttribute GetContractSignRecordListReq req) {
        return R.doResponse(contractSignRecordService.getContractSignRecordList(req));
    }

}

