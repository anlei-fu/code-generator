package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskRunRecord;
import com.spider.pojo.req.AddTaskRunRecordReq;
import com.spider.pojo.req.GetTaskRunRecordListReq;
import com.spider.pojo.req.UpdateTaskRunRecordByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.TaskRunRecordService;
import com.spider.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class TaskRunRecordController {

    @Autowired
    private TaskRunRecordService taskRunRecordService;

    @ApiOperation("")
    @PostMapping(path = "/taskRunRecord")
    public R addTaskRunRecord(@Validated @ModelAttribute AddTaskRunRecordReq req) {
        return R.doResponse(taskRunRecordService.addTaskRunRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/taskRunRecord/{id}")
    public R deleteTaskRunRecordById(@PathVariable Integer id) {
        return R.doResponse(taskRunRecordService.deleteTaskRunRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/taskRunRecord/{id}")
    public R updateTaskRunRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskRunRecordByIdReq req) {
        return R.doResponse(taskRunRecordService.updateTaskRunRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskRunRecord/{id}")
    public R<TaskRunRecord> getTaskRunRecordById(@PathVariable Integer id) {
        return R.doResponse(taskRunRecordService.getTaskRunRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskRunRecord")
    public R<PageInfo<TaskRunRecord>> getTaskRunRecordList(@Validated @ModelAttribute GetTaskRunRecordListReq req) {
        return R.doResponse(taskRunRecordService.getTaskRunRecordList(req));
    }

}
