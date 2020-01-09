package com.contract.controller;

import com.contract.pojo.entity.UserPurchaseRecord;
import com.contract.pojo.req.AddUserPurchaseRecordReq;
import com.contract.pojo.req.GetUserPurchaseRecordListReq;
import com.contract.pojo.req.UpdateUserPurchaseRecordByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.UserPurchaseRecordService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class UserPurchaseRecordController {

    @Autowired
    private UserPurchaseRecordService userPurchaseRecordService;

    @ApiOperation("")
    @PostMapping(path = "/userPurchaseRecord")
    public R addUserPurchaseRecord(@Validated @ModelAttribute AddUserPurchaseRecordReq req) {
        return R.doResponse(userPurchaseRecordService.addUserPurchaseRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userPurchaseRecord/{id}")
    public R deleteUserPurchaseRecordById(@PathVariable Integer id) {
        return R.doResponse(userPurchaseRecordService.deleteUserPurchaseRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userPurchaseRecord/{id}")
    public R updateUserPurchaseRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserPurchaseRecordByIdReq req) {
        return R.doResponse(userPurchaseRecordService.updateUserPurchaseRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userPurchaseRecord/{id}")
    public R<UserPurchaseRecord> getUserPurchaseRecordById(@PathVariable Integer id) {
        return R.doResponse(userPurchaseRecordService.getUserPurchaseRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userPurchaseRecord")
    public R<PageInfo<UserPurchaseRecord>> getUserPurchaseRecordList(@Validated @ModelAttribute GetUserPurchaseRecordListReq req) {
        return R.doResponse(userPurchaseRecordService.getUserPurchaseRecordList(req));
    }

}

