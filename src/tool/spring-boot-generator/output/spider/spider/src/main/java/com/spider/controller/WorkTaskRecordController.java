package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.WorkTaskRecord;
import com.spider.pojo.req.AddWorkTaskRecordReq;
import com.spider.pojo.req.GetWorkTaskRecordListReq;
import com.spider.pojo.req.UpdateWorkTaskRecordByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.WorkTaskRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class WorkTaskRecordController {

    @Autowired
    private WorkTaskRecordService workTaskRecordService;

    @ApiOperation("")
    @PostMapping(path = "/workTaskRecord")
    public R addWorkTaskRecord(@Validated @ModelAttribute AddWorkTaskRecordReq req) {
        return R.doResponse(workTaskRecordService.addWorkTaskRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/workTaskRecord/{id}")
    public R deleteWorkTaskRecordById(@PathVariable Integer id) {
        return R.doResponse(workTaskRecordService.deleteWorkTaskRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/workTaskRecord/{id}")
    public R updateWorkTaskRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateWorkTaskRecordByIdReq req) {
        return R.doResponse(workTaskRecordService.updateWorkTaskRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/workTaskRecord/{id}")
    public R<WorkTaskRecord> getWorkTaskRecordById(@PathVariable Integer id) {
        return R.doResponse(workTaskRecordService.getWorkTaskRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/workTaskRecord")
    public R<PageInfo<WorkTaskRecord>> getWorkTaskRecordList(@Validated @ModelAttribute GetWorkTaskRecordListReq req) {
        return R.doResponse(workTaskRecordService.getWorkTaskRecordList(req));
    }

}
