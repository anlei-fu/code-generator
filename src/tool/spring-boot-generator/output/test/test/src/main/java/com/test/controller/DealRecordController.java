/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:19:37
 */
package com.test.controller;

import com.test.pojo.req.AddDealRecordReq;
import com.test.pojo.req.GetDealRecordListReq;
import com.test.pojo.req.UpdateDealRecordByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.pojo.resp.R;
import com.test.service.DealRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "")
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
