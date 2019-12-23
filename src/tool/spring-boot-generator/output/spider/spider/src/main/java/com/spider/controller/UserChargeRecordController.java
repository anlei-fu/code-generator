package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.UserChargeRecord;
import com.spider.pojo.req.AddUserChargeRecordReq;
import com.spider.pojo.req.GetUserChargeRecordListReq;
import com.spider.pojo.req.UpdateUserChargeRecordByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.UserChargeRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class UserChargeRecordController {

    @Autowired
    private UserChargeRecordService userChargeRecordService;

    @ApiOperation("")
    @PostMapping(path = "/userChargeRecord")
    public R addUserChargeRecord(@Validated @ModelAttribute AddUserChargeRecordReq req) {
        return R.doResponse(userChargeRecordService.addUserChargeRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/userChargeRecord/{id}")
    public R deleteUserChargeRecordById(@PathVariable Integer id) {
        return R.doResponse(userChargeRecordService.deleteUserChargeRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/userChargeRecord/{id}")
    public R updateUserChargeRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserChargeRecordByIdReq req) {
        return R.doResponse(userChargeRecordService.updateUserChargeRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/userChargeRecord/{id}")
    public R<UserChargeRecord> getUserChargeRecordById(@PathVariable Integer id) {
        return R.doResponse(userChargeRecordService.getUserChargeRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/userChargeRecord")
    public R<PageInfo<UserChargeRecord>> getUserChargeRecordList(@Validated @ModelAttribute GetUserChargeRecordListReq req) {
        return R.doResponse(userChargeRecordService.getUserChargeRecordList(req));
    }

}
