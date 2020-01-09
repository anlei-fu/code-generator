package com.contract.controller;

import com.contract.pojo.entity.ContractNotaryRecord;
import com.contract.pojo.req.AddContractNotaryRecordReq;
import com.contract.pojo.req.GetContractNotaryRecordListReq;
import com.contract.pojo.req.UpdateContractNotaryRecordByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.ContractNotaryRecordService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class ContractNotaryRecordController {

    @Autowired
    private ContractNotaryRecordService contractNotaryRecordService;

    @ApiOperation("")
    @PostMapping(path = "/contractNotaryRecord")
    public R addContractNotaryRecord(@Validated @ModelAttribute AddContractNotaryRecordReq req) {
        return R.doResponse(contractNotaryRecordService.addContractNotaryRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/contractNotaryRecord/{id}")
    public R deleteContractNotaryRecordById(@PathVariable Integer id) {
        return R.doResponse(contractNotaryRecordService.deleteContractNotaryRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/contractNotaryRecord/{id}")
    public R updateContractNotaryRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateContractNotaryRecordByIdReq req) {
        return R.doResponse(contractNotaryRecordService.updateContractNotaryRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/contractNotaryRecord/{id}")
    public R<ContractNotaryRecord> getContractNotaryRecordById(@PathVariable Integer id) {
        return R.doResponse(contractNotaryRecordService.getContractNotaryRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/contractNotaryRecord")
    public R<PageInfo<ContractNotaryRecord>> getContractNotaryRecordList(@Validated @ModelAttribute GetContractNotaryRecordListReq req) {
        return R.doResponse(contractNotaryRecordService.getContractNotaryRecordList(req));
    }

}

