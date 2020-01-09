package com.contract.controller;

import com.contract.pojo.entity.UserConsumeRecord;
import com.contract.pojo.req.AddUserConsumeRecordReq;
import com.contract.pojo.req.GetUserConsumeRecordListReq;
import com.contract.pojo.req.UpdateUserConsumeRecordByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.UserConsumeRecordService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class UserConsumeRecordController {

    @Autowired
    private UserConsumeRecordService userConsumeRecordService;

    @ApiOperation("")
    @PostMapping(path = "/userConsumeRecord")
    public R addUserConsumeRecord(@Validated @ModelAttribute AddUserConsumeRecordReq req) {
        return R.doResponse(userConsumeRecordService.addUserConsumeRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userConsumeRecord/{id}")
    public R deleteUserConsumeRecordById(@PathVariable Integer id) {
        return R.doResponse(userConsumeRecordService.deleteUserConsumeRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userConsumeRecord/{id}")
    public R updateUserConsumeRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserConsumeRecordByIdReq req) {
        return R.doResponse(userConsumeRecordService.updateUserConsumeRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userConsumeRecord/{id}")
    public R<UserConsumeRecord> getUserConsumeRecordById(@PathVariable Integer id) {
        return R.doResponse(userConsumeRecordService.getUserConsumeRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userConsumeRecord")
    public R<PageInfo<UserConsumeRecord>> getUserConsumeRecordList(@Validated @ModelAttribute GetUserConsumeRecordListReq req) {
        return R.doResponse(userConsumeRecordService.getUserConsumeRecordList(req));
    }

}

