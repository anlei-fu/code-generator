package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.UserDeductRecord;
import com.spider.pojo.req.AddUserDeductRecordReq;
import com.spider.pojo.req.GetUserDeductRecordListReq;
import com.spider.pojo.req.UpdateUserDeductRecordByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.UserDeductRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class UserDeductRecordController {

    @Autowired
    private UserDeductRecordService userDeductRecordService;

    @ApiOperation("")
    @PostMapping(path = "/userDeductRecord")
    public R addUserDeductRecord(@Validated @ModelAttribute AddUserDeductRecordReq req) {
        return R.doResponse(userDeductRecordService.addUserDeductRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userDeductRecord/{id}")
    public R deleteUserDeductRecordById(@PathVariable Integer id) {
        return R.doResponse(userDeductRecordService.deleteUserDeductRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userDeductRecord/{id}")
    public R updateUserDeductRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserDeductRecordByIdReq req) {
        return R.doResponse(userDeductRecordService.updateUserDeductRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userDeductRecord/{id}")
    public R<UserDeductRecord> getUserDeductRecordById(@PathVariable Integer id) {
        return R.doResponse(userDeductRecordService.getUserDeductRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userDeductRecord")
    public R<PageInfo<UserDeductRecord>> getUserDeductRecordList(@Validated @ModelAttribute GetUserDeductRecordListReq req) {
        return R.doResponse(userDeductRecordService.getUserDeductRecordList(req));
    }

}
