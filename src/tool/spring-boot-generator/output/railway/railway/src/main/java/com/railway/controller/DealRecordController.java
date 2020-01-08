package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DealRecord;
import com.railway.pojo.req.AddDealRecordReq;
import com.railway.pojo.req.GetDealRecordListReq;
import com.railway.pojo.req.UpdateDealRecordByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.DealRecordService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class DealRecordController {

    @Autowired
    private DealRecordService dealRecordService;

    @ApiOperation("")
    @PostMapping(path = "/dealRecord")
    public R addDealRecord(@Validated @ModelAttribute AddDealRecordReq req) {
        return R.doResponse(dealRecordService.addDealRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/dealRecord/{id}")
    public R deleteDealRecordById(@PathVariable Integer id) {
        return R.doResponse(dealRecordService.deleteDealRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/dealRecord/{id}")
    public R updateDealRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDealRecordByIdReq req) {
        return R.doResponse(dealRecordService.updateDealRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/dealRecord/{id}")
    public R<DealRecord> getDealRecordById(@PathVariable Integer id) {
        return R.doResponse(dealRecordService.getDealRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/dealRecord")
    public R<PageInfo<DealRecord>> getDealRecordList(@Validated @ModelAttribute GetDealRecordListReq req) {
        return R.doResponse(dealRecordService.getDealRecordList(req));
    }

}
