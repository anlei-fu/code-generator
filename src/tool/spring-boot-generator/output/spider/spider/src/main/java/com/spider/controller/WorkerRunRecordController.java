package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.WorkerRunRecord;
import com.spider.pojo.req.AddWorkerRunRecordReq;
import com.spider.pojo.req.GetWorkerRunRecordListReq;
import com.spider.pojo.req.UpdateWorkerRunRecordByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.WorkerRunRecordService;
import com.spider.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class WorkerRunRecordController {

    @Autowired
    private WorkerRunRecordService workerRunRecordService;

    @ApiOperation("")
    @PostMapping(path = "/workerRunRecord")
    public R addWorkerRunRecord(@Validated @ModelAttribute AddWorkerRunRecordReq req) {
        return R.doResponse(workerRunRecordService.addWorkerRunRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/workerRunRecord/{id}")
    public R deleteWorkerRunRecordById(@PathVariable Integer id) {
        return R.doResponse(workerRunRecordService.deleteWorkerRunRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/workerRunRecord/{id}")
    public R updateWorkerRunRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateWorkerRunRecordByIdReq req) {
        return R.doResponse(workerRunRecordService.updateWorkerRunRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/workerRunRecord/{id}")
    public R<WorkerRunRecord> getWorkerRunRecordById(@PathVariable Integer id) {
        return R.doResponse(workerRunRecordService.getWorkerRunRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/workerRunRecord")
    public R<PageInfo<WorkerRunRecord>> getWorkerRunRecordList(@Validated @ModelAttribute GetWorkerRunRecordListReq req) {
        return R.doResponse(workerRunRecordService.getWorkerRunRecordList(req));
    }

}
