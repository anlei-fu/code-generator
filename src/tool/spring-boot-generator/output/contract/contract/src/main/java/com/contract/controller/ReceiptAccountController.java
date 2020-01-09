package com.contract.controller;

import com.contract.pojo.entity.ReceiptAccount;
import com.contract.pojo.req.AddReceiptAccountReq;
import com.contract.pojo.req.GetReceiptAccountListReq;
import com.contract.pojo.req.UpdateReceiptAccountByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.ReceiptAccountService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class ReceiptAccountController {

    @Autowired
    private ReceiptAccountService receiptAccountService;

    @ApiOperation("")
    @PostMapping(path = "/receiptAccount")
    public R addReceiptAccount(@Validated @ModelAttribute AddReceiptAccountReq req) {
        return R.doResponse(receiptAccountService.addReceiptAccount(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/receiptAccount/{id}")
    public R deleteReceiptAccountById(@PathVariable Integer id) {
        return R.doResponse(receiptAccountService.deleteReceiptAccountById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/receiptAccount/{id}")
    public R updateReceiptAccountById(@PathVariable Integer id, @Validated @ModelAttribute UpdateReceiptAccountByIdReq req) {
        return R.doResponse(receiptAccountService.updateReceiptAccountById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/receiptAccount/{id}")
    public R<ReceiptAccount> getReceiptAccountById(@PathVariable Integer id) {
        return R.doResponse(receiptAccountService.getReceiptAccountById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/receiptAccount")
    public R<PageInfo<ReceiptAccount>> getReceiptAccountList(@Validated @ModelAttribute GetReceiptAccountListReq req) {
        return R.doResponse(receiptAccountService.getReceiptAccountList(req));
    }

}

